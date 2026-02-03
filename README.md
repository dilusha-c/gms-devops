🏋️ GymSync DevOps

CI/CD Enabled Full-Stack Deployment on AWS

GymSync DevOps is a production-ready DevOps implementation for a full-stack Gym Management System.
The project demonstrates end-to-end CI/CD, Dockerized deployment, and cloud hosting on AWS EC2 using real-world DevOps practices.

Every push to the main branch automatically builds, containerizes, and deploys the application to a live EC2 instance.


🚀 Architecture Overview

Frontend: React (Vite) served via Nginx container

Backend: Spring Boot REST API

Database: MySQL

CI/CD: GitHub Actions

Containerization: Docker & Docker Compose

Cloud: AWS EC2 (Ubuntu)

🔄 CI/CD Workflow

Code pushed to GitHub main branch

GitHub Actions builds backend JAR and frontend assets

Docker images are built for backend and frontend

Images are pushed to Docker Hub

GitHub Actions connects to AWS EC2 via SSH

Docker Compose pulls latest images and redeploys containers

🖼️ Project Screenshots
1️⃣ GitHub Actions CI/CD Pipeline

Automated CI/CD pipeline showing successful build and deployment.

2️⃣ Docker Hub Repositories

Docker Hub repositories storing backend and frontend images.

3️⃣ AWS EC2 Instance

AWS EC2 instance hosting the GymSync application.

4️⃣ Docker Containers Running on EC2

SSH terminal showing live Docker containers using Docker Compose.

5️⃣ Live GymSync Web Application

Production GymSync admin dashboard running on AWS.

🐳 Docker Compose Configuration

```yaml
services:
  mysql:
    image: mysql:8
    container_name: gymsync-mysql
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: gms1
    volumes:
      - mysql_data:/var/lib/mysql

  backend:
    image: dilushachamika/gymsync-backend
    container_name: gymsync-backend
    depends_on:
      - mysql
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://mysql:3306/gms1
      SPRING_DATASOURCE_USERNAME: root
      SPRING_DATASOURCE_PASSWORD: password
    ports:
      - "8090:8090"

  frontend:
    image: dilushachamika/gymsync-frontend
    container_name: gymsync-frontend
    depends_on:
      - backend
    ports:
      - "80:80"

volumes:
  mysql_data:

```

🧰 Technologies Used

GitHub Actions

Docker

Docker Compose

AWS EC2

Ubuntu Linux

Spring Boot

React (Vite)

MySQL

CI/CD Automation

📌 DevOps Highlights

Fully automated CI/CD pipeline

Zero manual deployment

Multi-container orchestration

Cloud-based production deployment

Real-world DevOps workflow

👤 Author

Dilusha Chamika
Computer Systems Engineering Undergraduate
DevOps | Cloud | Automation

📄 License

MIT License
