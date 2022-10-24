import React, { useState }  from 'react'
import login from '../LOGIN/login'
import Logo from '../../logo.png'
import Shop from '../../Shopping Cart.png'
import '../HOME/Styles.css'
import LoginApp from '../LOGIN/LoginApp'



export default function Navigation() {
  const [loginState ,setLogin] = useState(false);
  return (
    <div className="nav-container">
        <div className="wrapper">
            <nav className="navbig">
                
               
                <ul className="nav-menu">
                <div className="logo">
                    <a href={""}>
                        {" "}
                        <img style={{ height:60}} src={Logo} alt="logo" />
                        {" "}
                     </a>
                </div>
                  <div  className="dropdown" id="cat">Category</div>
                  <input type="text" className="search" placeholder=" Search for anything...."></input>
                  <a>FutureAdda business</a>
                  <a>Teach</a>
                  <a>
                    {" "}
                    <img style={{ height:30}} src={Shop} alt="shop" />
                    {" "}
                  </a>
                  <a href={""}  className="btn1">Log in</a>
                  <a href={""} className="btn2">Sign up</a>
        
                  
                </ul>
                
                
            </nav>
        </div>
    </div>
  )
}
