pipeline {
    agent any
     tools {
        nodejs "node"
        }
    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/thanhlam2034/POM']])
            }
        }
        stage('Install') {
            steps {
                sh '''
                    npm i -D @playwright/test && npx playwright install
            '''
            }
        }
        stage('Testing') {
            steps {
                sh '''
                    npx playwright test testwithoutPOM.spec.ts --project=chromium
                '''
            }
        }
    }
}
