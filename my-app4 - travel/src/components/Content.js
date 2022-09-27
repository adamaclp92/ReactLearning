import React from 'react'
import location from '../images/location.png'

export default function Content(props){
    
    return (
        <div className='container'>
            <div className='row col-sm'>
                <div className='col-4'>
                    <img className="content-picture" src={props.imageUrl}/>
                </div>
                <div className='col-8'>
                    <img className='location-icon' src={location}/>
                    <span className='location'>{props.location}</span>
                    <a className='googleMapsUrl' href={props.googleMapsUrl}>view on Google Maps</a>
                    <h2>{props.title}</h2>
                    <p><b>{props.startDate} - {props.endDate}</b></p>
                    <p>{props.description}</p>
                    
                </div>

            </div>
            <hr/>
        </div>
    )

}