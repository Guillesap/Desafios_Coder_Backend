import fs from "fs";
import Product from "./Product.js";
import { __dirname, returnMessage } from "../utils.js";

export default class ProductContainer {
  constructor(path) {
    this.path = path;
  }

  async deleteImage(image) {
    await fs.promises.unlink(
      __dirname + "/public/images/" + image.split("/")[4]
    );
  }

  async save(product) {
    if (!product.title) {
      await this.deleteImage(product.thumbnail);
      return returnMessage(true, "El titulo es obligatorio", null);
    }

    if (!product.description) {
      await this.deleteImage(product.thumbnail);
      return returnMessage(true, "La descripcion es obligatoria", null);
    }

    if (!product.code) {
      await this.deleteImage(product.thumbnail);
      return returnMessage(true, "El codigo es obligatorio", null);
    }

    if (!product.stock) {
      await this.deleteImage(product.thumbnail);
      return returnMessage(true, "El stock es obligatorio", null);
    }

    if (!product.price) {
      await this.deleteImage(product.thumbnail);
      return returnMessage(true, "El precio es obligatorio", null);
    }

    if (!product.thumbnail) {
      await this.deleteImage(product.thumbnail);
      return returnMessage(true, "La portada es obligatoria", null);
    }

    try {
      const products = (await this.getAll()).payload;
      const idProducto =
        products.length > 0 ? products[products.length - 1].id + 1 : 1;
      const newProduct = new Product(
        idProducto,
        product.title,
        product.description,
        product.code,
        product.stock,
        product.price,
        product.thumbnail
      );

      products.push(newProduct);
      await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));

      return returnMessage(false, "Película guardada", newProduct);
    } catch (error) {
      return returnMessage(true, "Error al guardar la película", null);
    }
  }

  async getById(id) {
    try {
      const products = (await this.getAll()).payload;
      const product = products.find((product) => product.id === id);

      if (product) {
        return returnMessage(false, "Película encontrada", product);
      } else {
        return returnMessage(true, "Película no encontrada", null);
      }
    } catch (error) {
      return returnMessage(true, "Error al obtener la película", null);
    }
  }

  async getAll() {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const products = JSON.parse(data);

      return returnMessage(false, "Peliculas encontradas", products);
    } catch (error) {
      return returnMessage(true, "Error al obtener las películas", null);
    }
  }

  async deleteById(id) {
    try {
      const products = (await this.getAll()).payload;
      const eliminatedProduct = products.find((product) => product.id === id);
      if (!eliminatedProduct) {
        return returnMessage(true, "Película no encontrada", null);
      }
      const productsFiltered = products.filter((product) => product.id !== id);
      await this.deleteImage(eliminatedProduct.thumbnail);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(productsFiltered, null, 2)
      );

      return returnMessage(false, "Película eliminada", eliminatedProduct);
    } catch (error) {
      return returnMessage(true, "Error al eliminar la película", null);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.path, "[]");

      return returnMessage(false, "Películas eliminadas", null);
    } catch (error) {
      return returnMessage(true, "Error al eliminar las películas", null);
    }
  }

  async updateById(id, newProduct) {
    try {
      const products = (await this.getAll()).payload;
      const indexProduct = products.findIndex((product) => product.id === id);
      if (indexProduct === -1) {
        await this.deleteImage(newProduct.thumbnail);
        return returnMessage(true, "Película no encontrada", null);
      }
      const productToBeUpdated = products[indexProduct];

      if (newProduct.title) {
        productToBeUpdated.title = newProduct.title;
      }
      if (newProduct.description) {
        productToBeUpdated.description = newProduct.description;
      }
      if (newProduct.code) {
        productToBeUpdated.code = newProduct.code;
      }
      if (newProduct.stock) {
        productToBeUpdated.stock = parseInt(newProduct.stock);
      }
      if (newProduct.price) {
        productToBeUpdated.price = parseFloat(newProduct.price);
      }
      if (newProduct.thumbnail) {
        await this.deleteImage(productToBeUpdated.thumbnail);
        productToBeUpdated.thumbnail = newProduct.thumbnail;
      }

      products[indexProduct] = productToBeUpdated;

      await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));
      return returnMessage(
        false,
        "Película actualizada",
        productToBeUpdated
      );
    } catch (error) {
      return returnMessage(true, "Error al actualizar la película", null);
    }
  }
}
