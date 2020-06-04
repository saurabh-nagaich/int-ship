import React from 'react';
// import "./Rnav.css"

function Rnav(){
    return (
        <div>
            <form class="register" action="#">
                <h1>Register your store</h1>
            <div> 
                <input type="text" placeholder="First Name" name="First Name" />
                <input type="text" placeholder="Last Name" name="Last Name" />
            </div>
            <div> 
                <input type="email" placeholder="Email" name="Email" required />
                <input type="text" placeholder="Phone" name="Phone"/>
            </div>
            <div> 
                <textarea placeholder="Type your message here"></textarea>           
            </div>
        <input type="submit" />
    </form>   
        </div>
    )
}

export default Rnav;