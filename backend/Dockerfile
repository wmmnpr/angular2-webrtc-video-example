#spectator  console to watch races
# to run the build web app with express
# To build
# npm run build
#
# docker build . -t ergregatta-web
# To run as local docker container
# docker run -p 3000:3000 -d ergregatta-web

#to deploy to heroku:
#heroku login
#heroku create
#heroku container:login
#heroku container:push web --app ergregatta-web
#heroku container:release web --app ergregatta-web

# Tell Docker to use the "node" Docker Image at version "10.15.3"
FROM node:14
# Create our containers WORKDIR and "node_modules" directory.
# Give the user:group "node" ownership of all files/directories in our containers WORKDIR
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
# Tell our container which directory to use as the WORKDIR
WORKDIR /home/node/app
# Copy over our local version of "package.json" and "package-lock.json" into our container
COPY package*.json ./

COPY dist/server.js .
# Creates a user for our container
USER node
# Installs our NPM packages from the "package.json" file we moved from local in to our container
RUN npm install
# Tells our container who owns the copied content
COPY --chown=node:node . .
# Exposes the port "3000" from our container
# This is also how we can connect to our container from our host machine (the one you're reading this from now)
#EXPOSE 3000
# An array of commands our container needs to run when we start it
CMD ["npm", "run", "start"]