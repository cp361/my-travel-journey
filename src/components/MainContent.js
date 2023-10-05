import React from 'react'
import { MapPin } from 'lucide-react';
import { ES } from 'country-flag-icons/react/3x2'
import { IT } from 'country-flag-icons/react/3x2'
import { CR } from 'country-flag-icons/react/3x2'
import { GR } from 'country-flag-icons/react/3x2'


export default function MainContent(props) {
    return (
        
        <section>

            <div className='card'>

                <img src={`../img/${props.imageUrl}`} alt='' className='img'></img>

                <div className='card-info'>

                <div className='location'>

                <p><MapPin className='pin' />
                {props.location}

                <a href={props.googleMapsUrl} className='maps' target='_blank'>View on Google Maps</a>
                </p>
                </div>

                <div className='card-text'>

                    <h1>{props.title}<p className='flag'>{props.flag}</p></h1>

                    <p className='date'>

                        <span>{props.startDate}</span>
                         
                        <span>{props.endDate}</span>

                    </p>

                    <p className='location-info'>
                    {props.description}
                    </p>
                    
                </div>
                </div>

                
            </div>
            
        </section>

    )
}