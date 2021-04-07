import React from 'react';
import Places from '../content/places'

function Card (){

    return(
        <div className="info">
            {
                Places.map(spot=>(
                    <div className='content'>
                        <img src={spot.img}/>
                        <h1>{spot.city}</h1>
                        <h2>{spot.name}</h2>
                        <p>info</p>
                    </div>

                ))
            }
        </div>
    )
}

export default Card;