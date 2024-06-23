# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Setup environment as production
ENV NODE_ENV production

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install Nest CLI
RUN npm install -g @nestjs/cli

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Copy .env file
COPY .env ./

# Install NestJS CLI for build

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the server using the production build
CMD ["node", "dist/main"]
