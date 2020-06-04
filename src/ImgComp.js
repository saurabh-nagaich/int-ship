import React from 'react';

function ImgComp({src}){
    let imgStyles={
        width:100+"%",
        height:100+ "%"
    }
    
    return (
        <div>
            <img src={src} alt="slide-img" style={imgStyles}/>
            <button id="book-btn">book now</button>
        </div>
    )
}
export default ImgComp;