pipeline {
    agent any

    environment {
        IMAGE_NAME = "springboot-enterprise-app"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package -DskipTests'
            }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }
    }

    post {
        success {
            echo 'Build and Docker image created successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}
