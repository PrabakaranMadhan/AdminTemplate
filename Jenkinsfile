pipeline {
    agent any
  
    stages {
      stage('Install Dependencies') {
            steps {
                sh 'sudo apt update'
                sh 'sudo apt install nodejs -y'
                sh 'sudo apt install npm'
                
            }
        }

        stage('Build') {
            steps {
                // Build the Angular application
                sh 'ng build'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        
    }
    
}
