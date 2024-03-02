import './login.css';
import './global.css';
import { Kanit } from '@next/font/google'


export default function Home() {
  return (
    <>    
      <div>
        <h1 className='title'>Business.io</h1>

        <div className='loginBox'>

          <h3 className='inputText'>Username: </h3>
            <input className='inputBox' type="text" placeholder="Enter your Username" />

          <h3 className='inputText'>Password: </h3>
            <input className='inputBox' type="text" placeholder="Enter your Password" />


        </div>

      </div>
    </>
    
  )
}
