import React , {useState} from 'react';
import "./nav.scss";
import logo from "./image/logo.png";

function Nav(){

    let [classCh,setClass]=useState("")
    //Fuction expression to select elements
    
    //open the menu on click 
    const addClass=()=>{
        setClass("active")
    }
    const removeClass=()=>{
        setClass("")
        
    }



    return(
        <div className="container">
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">Products</a>
                    </li>
                    
                        <a href="#html" className="logo"><img src={logo} alt="this" srcset="" /></a>
                    

                    <li>
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                    <li>
                        <a href="#login"  id="nav-cta">Book now</a>
                    </li>
                </ul>
            </nav>
            <nav className="nav-2">
                <div className=" cool nav-set-2">
                    <div className="logo-2">
                        <a href="#html" className="logo"><img src={logo} className="logo" alt="this" srcset="" /></a>
                    </div>
                    <div class="menu-icons open" onClick={addClass}>
                        <i class="icon ion-md-menu"></i>
                    </div>
                
                    <ul class={`nav-list-2 side-nav ${classCh}` }>
                            <div class="menu-icons close " onClick={removeClass}>
                                <i class="icon ion-md-close"></i>
                            </div>
                            <li class="nav-items-2">
                                <a href="#" class="nav-links-2">Home</a>
                            </li>
                            <li class="nav-items-2">
                                <a href="#" class="nav-links-2">Products</a>
                            </li>
                            {/* <li class="nav-items-2">
                                <a href="#" class="nav-links-2"></a>
                            </li> */}
                            <li class="nav-items-2">
                                <a href="#" class="nav-links-2">Contact Us</a>
                            </li>
                            <li class="nav-items-2">
                                <a href="#" class="nav-links-2">Book Us</a>
                            </li>
                            <li class="nav-items-2">
                                <a href="#" class="nav-links-2">Login/Register</a>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav