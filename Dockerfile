# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /usr/src/*

# Copy the app package and package-lock.json file
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile


# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install

EXPOSE 3000

# Start the app using start command
CMD [ "node", "src/index.js" , "yarn start"]
