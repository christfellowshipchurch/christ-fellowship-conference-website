FROM node:8-alpine
RUN yarn
RUN yarn add node-sass
WORKDIR ./
EXPOSE 4000
CMD [ "yarn", "yarn start" ]