const axios = require('axios');
const apiUrl = 'http://localhost:3001/'
export const SendSub = (body)=>{
    axios({
        method: 'post',
        url: apiUrl,
        data:{
            "email":body.email
        }
      });
}





export const GiveAllEmails = axios({
        method: 'get',
        url: 'http://localhost:3001/',
        responseType: 'stream'
      })
        .then(resp=>{
            return resp.data
        });