import * as MQTT from "mqtt"

const mqttBroker=process.env.MQTT_BROKER
const options={
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    clientId: process.env.CLIENT_ID
}
export const mqttClient = MQTT.connect(mqttBroker, options)