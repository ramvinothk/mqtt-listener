# MQTT Listener

This is just a basic MQTT Listener project, This will post the incoming messages to HTTP. 

**Project Requirements:**

✅ Node.js



## Technologies

- Node.js

## Install



Once you've cloned it successfully, install the dependencies:
```bash
npm i
```

### Environment setup
Please add the .env file with the following Values
```bash
MQTT_BROKER="mqtt://xxxx.xxxx"
CLIENT_ID="xxxxx"
USERNAME='xxxxx'
PASSWORD='xxxxxxxxx'
TOPIC='xxx/yy'
BACKEND_URL='http://localhost:3000/'  //server url
```

If everything is all set up, you can run it locally:
```bash
node app
```


## Deployment
We can run this application as a background service by using forever.
```bash
npm start
```

## Author
[Vinoth](https://github.com/ramvinothk)
