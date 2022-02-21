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
export const DeleteSub = (id)=>{
  axios({
      method: 'delete',
      url: apiUrl,
      data:{
          "id":id
      }
    });
}

export const GiveAllEmails = ()=>{ return fetch('http://localhost:3001/')
.then(response => response.json())
.then(data =>  data)}