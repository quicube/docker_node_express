FROM node:16.8.0-alpine

RUN apk --update --no-cache add \
    tzdata \
    && cp /user/share/zoneinfo/Asia/Tokyo /etc/localtime \
    && apk del tzdata
