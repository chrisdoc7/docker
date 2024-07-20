pipeline {
  agent any
  stages {
    stage('Prepare environment') {
      steps {
        sh 'node -v || apt install -y nodejs'
        sh 'npm -v || apt install -y npm'
      }
    }

    stage('Install dependences backend') {
      steps {
        sh 'cd ./backend'
        sh 'ls'
        sh 'npm install'
      }
    }

  }
}