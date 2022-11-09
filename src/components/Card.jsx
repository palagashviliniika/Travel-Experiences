import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <div className="card--parent">
            <img className='card--img' src={props.imageUrl} alt="" />
            <div className="card--info">
                <div className="card--location">
                    <div className="location">
                        <img className='location--icon' src="../../public/locator.svg"/>
                        <h4 className='country'>{props.location}</h4>
                    </div>
                    <a className='url' href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <h5 className='card--date'>{props.startDate} - {props.endDate}</h5>
                <p className='card--description'>{props.description}</p>
            </div>
        </div>
        <hr className='card--endline'></hr>
    </div>
  )
}
