# Multi-stage Dockerfile for building and running the Spring Boot backend

# Build stage: use Maven with JDK 21 to build the project
FROM maven:3.9.4-eclipse-temurin-21 AS build
WORKDIR /app

# Copy pom and source then build the application
COPY pom.xml ./
COPY src ./src
RUN mvn -B -DskipTests package

# Run stage: use a smaller JRE image
FROM eclipse-temurin:21-jre
WORKDIR /app

# Copy the built jar from the build stage
COPY --from=build /app/target/*.jar ./app.jar

# Expose the port the application listens on
EXPOSE 8090

# Default command
ENTRYPOINT ["java","-jar","/app/app.jar"]
