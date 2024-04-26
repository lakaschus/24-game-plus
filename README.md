# 24-game

<img src="res/screenshot.png" width="300">

## Project Setup

This project is a Vue.js application that can be dockerized and deployed to Azure using a one-click deployment script.

### Prerequisites

Before you can run the project, you need to install the following:

1. **Node.js**: This is required to run the project locally and to install the project dependencies. You can download it from [here](https://nodejs.org/).

2. **Docker**: This is required to create a Docker image of the project. The installation instructions for Docker can be found [here](https://docs.docker.com/get-docker/).

3. **Azure CLI**: This is required to deploy the Docker image to Azure. You can download it from [here](https://docs.microsoft.com/cli/azure/install-azure-cli).

### Auto Deploy App

You can nuild and run this app locally using Node:

```
npm install -g serve
```

or by using docker

```
docker build -t game-24 .
docker run game-24
```

If you want to make it accessible across the internet, get an azure account and run my automated deployment script:

```
source one-click-deployment.sh
```