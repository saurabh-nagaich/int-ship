import React, {useState } from 'react';
import "./Slider.scss";
import ImgComp from "./ImgComp";
import i1 from "./image/image1.jpg"
import i2 from "./image/image2.jpg"
import i3 from "./image/image3.jpg"
import i4 from "./image/image4.jpg"
import i5 from "./image/image5.jpg"
import i6 from "./image/image6.jpg"


function Slider(){
    // array for component to show inside the slider 
   // add components to array

    let sliderArr =[
        <ImgComp src={i1}/>,
        <ImgComp src={i2}/>,
        <ImgComp src={i3}/>,
        <ImgComp src={i4}/>,
         <ImgComp src={i5}/>,
        <ImgComp src={i6}/>
    ]
    const [x,setX]=useState(0);

    const gotoLeft=()=>{
        
        console.log(x);
        x===0?setX(-100*(sliderArr.length-1)):setX(x+100);

    }
    
    const gotoRight=()=>{
    
        x===-100*(sliderArr.length-1)?setX(0):setX(x-100);
    }

    // setInterval(gotoRight,3000);


    return(
        <div className="slider">
            {
                sliderArr.map((item,index)=>{
                    return (
                        <div key={index} class="slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }

            // buttons
            <button id="gotoLeft" onClick={gotoLeft}><img src="https://img.icons8.com/android/24/ffffff/expand-arrow.png"/></button>
            <button id="gotoRight"onClick={gotoRight}><img src="https://img.icons8.com/android/24/ffffff/expand-arrow.png"/></button>

        </div>
    );

}

export default Slider;