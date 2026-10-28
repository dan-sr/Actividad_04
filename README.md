# Actividad 04 – Crear un mapa web

CTE 334 – Desarrollo de Aplicaciones SIG

## ¿Qué es?

Es un mapa web hecho en QGIS con el complemento qgis2web.

Muestra los departamentos de Honduras y los centros educativos del país, sobre un mapa base de OpenStreetMap.

## ¿Qué hay en esta carpeta?

- **public-html**: los archivos del mapa web.
- **Dockerfile**: las instrucciones para crear el servidor web con Docker.

## ¿Cómo se abre?

1. Crear la imagen:

   ```
   docker build -t apache-server .
   ```

2. Encender el servidor:

   ```
   docker run -dit --name webmap -p 8080:80 apache-server
   ```

3. Abrir en el navegador: http://localhost:8080/

## Imagen en Docker Hub

`dnlesr/webmap`
