const axios = require('axios');
const apiUrl = 'http://localhost:3001/'
export const SendSub = (body)=>{
  try{
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
  })
  }catch(e){
    console.log(e)
  }
    
}
export const DeleteSub = (ids)=>{
  const myDataObject ={"id":ids}
  try{
    fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myDataObject)
  })
  }catch(e){
    console.log(e)
  }
}

export const GiveAllEmails = ()=>{ return fetch(apiUrl)
.then(response => response.json())
.then(data =>  data)}

export const GiveAllEmailDomains = ()=>{ return fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    let emailsD= [];
    data.map(a=>emailsD.push(a.email.substring(a.email.indexOf('@'))));
    let uniqeEmails = [...new Set(emailsD)];
    return uniqeEmails;
  })
}
/* export const GiveSpecofocDomainEmail = ()=>{return fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    let emailsD= [];
    data.map(a=>emailsD.push(a.email.substring(a.email.indexOf('@'))));
    let uniqeEmails = [...new Set(emailsD)];
    return uniqeEmails;
  })
} */