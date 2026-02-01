# Docker and docker-compose (Backend)

Quick steps to build and run the Backend using Docker.

Build and run with Docker Compose (recommended):

```bash
cd Backend
docker compose up --build
```

This will build the Spring Boot app (via Maven in the Docker build stage) and start a MySQL 8 container. The service will be reachable at `http://localhost:8090`.

Notes:
- The compose file sets `SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_USERNAME`, and `SPRING_DATASOURCE_PASSWORD` so the application connects to the `db` service.
- To run only the backend image after building locally:

```bash
cd Backend
docker build -t gms-backend:local .
docker run -p 8090:8090 --env SPRING_DATASOURCE_URL=jdbc:mysql://host.docker.internal:3306/gms1 --env SPRING_DATASOURCE_USERNAME=root --env SPRING_DATASOURCE_PASSWORD=MYsql12121@ gms-backend:local
```
