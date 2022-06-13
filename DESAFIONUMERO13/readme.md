## Ejemplos
Para levantar el servidor en modo cluster o fork usar:
```sh
nodemon server.js [NUMERO DE PUERTO] [CLUSTER, FORK]
```

Con forever:

```sh
forever server.js [NUMERO DE PUERTO] [CLUSTER, FORK]
```

Con PM2 (CLUSTER):

```sh
pm2 start server.js --name="Server2" --watch -i max -- [PUERTO]
```

Con PM2 (FORK):

```sh
pm2 start server.js --name="Server2" --watch -- [PUERTO]
```
