FROM node:latest

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node:node yarn.lock package.json ./

RUN yarn

COPY --chown=node:node . .

CMD ["yarn", "nodemon", "--exec", "babel-node", "./src/index.js"]