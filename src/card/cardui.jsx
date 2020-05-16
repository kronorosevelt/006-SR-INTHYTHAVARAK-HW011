import React from 'react'
import img1 from '../asset/calicon.jpg'
const Card = props =>{
    return(
        <div className="Card text-center">
            <div className="overflow">
                <img src={img1} alt="image1"/>
            </div>
            
        </div>
    );
}
export default Card;
