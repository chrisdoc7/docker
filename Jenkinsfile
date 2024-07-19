pipeline {
  agent any
  stages {
    stage('Prepare environment') {
      steps {
        sh 'node -v || apk add --update node'
        sh 'npm -v || apk add --update npm'
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