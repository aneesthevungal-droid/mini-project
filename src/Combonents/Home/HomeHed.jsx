import { useNavigate } from 'react-router-dom';
import './HomeHed.css'

function HomeHed(){
    const navigate=useNavigate()
    return(
        <>
        <nav className='ho-hed'>
            <label htmlFor="" className='logo'><b><strong>BUDGETER</strong></b></label>
            <div className='ho-hed-btn'>
                 <button onClick={()=> navigate('/signup')}><strong>Sign Up</strong></button>
                 <button onClick={()=> navigate('/signin')}><strong>Sign In</strong></button>
            </div>
        </nav>
        </>
    )
}


export default HomeHed;