


## CLUSTER / FORK
A fin de iniciar servidor en modo cluster o fork usar:
```sh
nodemon server.js [NUMERO DE PUERTO] [CLUSTER, FORK]
```
## FOREVER
```sh
forever server.js [NUMERO DE PUERTO] [CLUSTER, FORK]
```
## PM2 (CLUSTER)
```sh
pm2 start server.js --name="Server2" --watch -i max -- [PUERTO]
```
## PM2 (FORK)

```sh
pm2 start server.js --name="Server2" --watch -- [PUERTO]
```
