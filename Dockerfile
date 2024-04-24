# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies inside the Docker container
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the app for production
RUN npm run build

# Use an official lightweight Node.js runtime as a second stage build
FROM node:14-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Install serve to run your application
RUN npm install -g serve

# Copy the build output from the first stage build
COPY --from=0 /app/dist ./dist

# Instruct Docker to listen on port 5000 and run the serve command
EXPOSE 5000
CMD ["serve", "-s", "dist", "-l", "5000"]