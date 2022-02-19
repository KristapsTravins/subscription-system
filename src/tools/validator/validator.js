export const isCo = (val) =>{
    let str = "";
  for(let i = val.length-1;i>0;i--){
      str += val[i];
      if(str === "oc."){
          return false
      }
  }
  return true
}