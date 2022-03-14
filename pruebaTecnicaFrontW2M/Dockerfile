FROM node:alpine
EXPOSE 3000
COPY db.json db.json
RUN yarn global add json-server
CMD ["json-server", "db.json"]

