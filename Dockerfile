FROM node:22-alpine3.18

COPY frontend /app/


WORKDIR /app/frontend/
RUN cd /app/frontend
RUN rm -rf node_modules .idea .next

RUN npm install --loglevel verbose
RUN npm run build --loglevel verbose > ./npm-build.log
RUN cat ./npm-build.log
RUN pwd
CMD ["npm", "start"]