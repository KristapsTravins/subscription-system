import './css/input.css'

const Input = ()=> {
  return (
   <form>
       <div className='input-field'>
           <input type="text" placeholder='Type your email address here…' /><input type="submit" value="→" />
       </div>
       <div className='check-field'>
         <input type="checkbox" required/>
         <label>I agree to <a href="#">terms of service</a></label>
       </div>
   </form>
  )
}

export default Input