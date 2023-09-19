pipeline {
    agent any
  
    stages {
      stage('Install Dependencies') {
            steps {
                // Install Node.js and Angular CLI (if not already installed)
                sh 'curl -sL https://deb.nodesource.com/setup_18.x | bash -'
                sh 'apt-get install -y nodejs'
                sh 'npm install -g @angular/cli'
                
                // Install project dependencies
                sh 'npm install'
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
    post {
        success {
            sh 'cp -r /var/lib/jenkins/workspace/demo /home/proz/deployment/'
            
        }
        failure {
            sh 'cp -f /var/lib/jenkins/workspace/demo /home/proz/deployment/'
        }
    }
}
