pipeline {
    agent any
  
    stages {
      stage('Install Dependencies') {
            steps {
                sh 'sudo apt-get update'
                sh 'sudo apt-get install -y ca-certificates curl gnupg'
                sh 'sudo mkdir -p /etc/apt/keyrings'
                sh 'curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg'
                sh 'NODE_MAJOR=20'
                sh 'echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list'
                sh 'sudo apt-get update'
                Sh 'sudo apt-get install nodejs -y'
                sh 'sudo npm install -g @angular/cli'
                
                // Install project dependencies
                sh 'sudo npm install'
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
