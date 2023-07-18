import {} from 'dotenv/config'
import {mqttClient} from "./repository/mqttClient.js";
import {httpController} from "./controller/httpController.js";


mqttClient.on("connect", () => {
    mqttClient.subscribe(process.env.TOPIC,  (err) => {
        if (!err) {
            console.log(`Subscribe to ${process.env.TOPIC}`);
        }
    });
})

mqttClient.on("message", async (topic, message) =>{
    // message is Buffer
    console.log(message.toString());
    await httpController(JSON.parse(message.toString()))
});