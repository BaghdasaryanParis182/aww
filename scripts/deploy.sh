export PATH="$HOME/node-versions/node-v16.20.2-linux-x64/bin":$PATH

WORKDIR=$(pwd)
CMS_DIR=$WORKDIR/aww-cms
FRONTEND_DIR=$WORKDIR/aww-frontend

cd "$CMS_DIR" || exit
yarn
yarn build:prod

cd "$FRONTEND_DIR" || exit
yarn
yarn build

cd "$WORKDIR" || exit

pm2 reload ecosystem.config.js --env=production




