import React, {useState} from 'react';
import Places from '../content/places'


function Card (){
    const [item, setItem] = useState(false)

    const showContent = ()=>{
        setItem(!item)
    }

    
    return(
        <div className="info">
            {
                Places.map(spot=>(
                    <div className='content'>
                        <img src={spot.img}/>
                        <div className='content-b'>
                            <h1>{spot.city}</h1>
                            <h2>{spot.name}</h2>
                            <p onClick={showContent}>info</p>
                            {item && <p>{spot.info}</p>}
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Card;