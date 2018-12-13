FROM node:8-alpine
RUN yarn
WORKDIR ./
EXPOSE 4000
CMD [ "yarn", "yarn start" ]