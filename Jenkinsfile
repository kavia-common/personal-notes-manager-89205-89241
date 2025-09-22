pipeline {
  agent any
  stages {
    stage('Bootstrap') {
      steps {
        sh 'sh ./ci-run.sh'
      }
    }
    stage('Gradle Check (stub)') {
      steps {
        sh 'sh ./gradle-check'
      }
    }
  }
}
