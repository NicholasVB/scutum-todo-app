################################
# BUILD FOR LOCAL DEVELOPMENT  
################################

FROM node:18-alpine AS development

RUN apk upgrade --update-cache --available && \
    apk add openssl && \
    rm -rf /var/cache/apk/*

WORKDIR /usr/src/scutum-todo-app

COPY --chown=node:node ./package.json ./package.json
COPY --chown=node:node ./package-lock.json ./package-lock.json

COPY --chown=node:node ./src/components ./src/components
COPY --chown=node:node ./src/redux ./src/redux
COPY --chown=node:node ./src/App.js ./src/App.js
COPY --chown=node:node ./src/App.scss ./src/App.scss
COPY --chown=node:node ./src/index.css ./src/index.css
COPY --chown=node:node ./src/index.js ./src/index.js
COPY --chown=node:node ./public ./public

RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

USER node

################################ 
# BUILD FOR PRODUCTION         
################################

FROM node:18-alpine AS build

RUN apk upgrade --update-cache --available && \
    apk add openssl && \
    rm -rf /var/cache/apk/*

WORKDIR /usr/src/scrutum-todo-app

COPY --chown=node:node ./package.json ./package.json
COPY --chown=node:node ./package-lock.json ./package-lock.json

COPY --chown=node:node ./src/components ./src/components
COPY --chown=node:node ./src/redux ./src/redux
COPY --chown=node:node ./src/App.js ./src/App.js
COPY --chown=node:node ./src/App.scss ./src/App.scss
COPY --chown=node:node ./src/index.css ./src/index.css
COPY --chown=node:node ./src/index.js ./src/index.js
COPY --chown=node:node ./public ./public

COPY --chown=node:node --from=development /usr/src/scutum-todo-app/node_modules ./node_modules

ENV NODE_ENV production

RUN npm run build

USER node

################################
# PRODUCTION                   
################################

FROM node:18-alpine AS production

RUN npm install -g serve

COPY --chown=node:node --from=build /usr/src/api/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/api/build ./build

EXPOSE 3000

CMD [ "serve", "build" ]
