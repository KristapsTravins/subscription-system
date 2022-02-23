import './css/socmedia.css';

const SocMediaBtn = (props)=> {
  return (
    <div id={props.id}  className='soc-media-btn'>
        {props.icon}
    </div>
  )
}

export default SocMediaBtn