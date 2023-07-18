import axios from 'axios';



export const httpController = async (data) =>{
    await axios({
        method: 'post',
        url: process.env.BACKEND_URL,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data,
        json: true
    }).then(res => {
        console.log("SUCCESS");
        return res
     });
}