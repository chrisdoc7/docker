pipeline {
  agent any
  stages {
    stage('Prepare environment') {
      steps {
        sh 'node -v || apt install nodejs'
        sh 'npm -v || apt install npm'
      }
    }

    stage('Install dependences backend') {
      steps {
        sh 'cd ./backend'
        sh 'npm install'
      }
    }

  }
}