FROM shotaromatsuya/premier-node:16 as desp
WORKDIR /desp

COPY package*.json ./
# npm cache リセット ここから
# RUN rm -rf node_modules
# RUN rm package-lock.json
# RUN npm cache clean --force
# RUN npm install --verbose
# ここまで
RUN npm ci

## runtime環境を作成
FROM shotaromatsuya/premier-node:16
WORKDIR /app

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
ENV NODE_ENV development

COPY --from=desp --chown=node:node /desp/node_modules ./node_modules
COPY --chown=node:node ./ ./


## PID1問題に対応する
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

USER node

EXPOSE 3000

CMD ["npm", "run", "start"]