# Stage 1: Compile and build Angular codebase

# Base image
FROM node:18 as build

# Create app directory
WORKDIR /usr/src/app

# Add the source code to the app folder
COPY . .

# Install dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/src/app/dist/frontend/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80
