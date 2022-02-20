import './css/input.css'
import { useForm } from "react-hook-form";
import { SendSub } from '../../api/apiCalls';
import { isCo } from '../../tools/validator/validator';
import { useContext } from 'react';
import { SubContext } from '../Content/Content';

const Input = ()=> {
  const Sub = useContext(SubContext);
  const { register, formState:{errors}, handleSubmit } = useForm({criteriaMode: "all"});
  const onSubmit = (data) => {
    SendSub(data);
    Sub.SetIsSubscribed(true);
  };
  return (
   <form onSubmit={handleSubmit(onSubmit)}>
       <div className='input-field'>
           <input  type="text" placeholder='Type your email address here…' {...register("email",{
                    validate:{
                        isValidEmail:email =>
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                          email
                        ),
                    containsCo:value=>{return isCo(value)},
                    minChars:value=>{return value.length > 10 }
                }})} /><input type="submit" value="→" />
       </div>
            {errors.email && errors.email.type === "containsCo" && <span>We dont accept .co domains</span>}
            {errors.email && errors.email.type === "isValidEmail" && <span>You must enter email</span>}
            {errors.email && errors.email.type === "minChars" && <span>Email must be longer than 10 characters</span>}
       <div className='check-field'>
         <input type="checkbox" required/>
         <label>I agree to <a href="#">terms of service</a></label>
       </div>
   </form>
  )
}

export default Input