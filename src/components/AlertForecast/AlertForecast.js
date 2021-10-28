import React from 'react'
import { Container } from 'react-bootstrap';


const AlertForecast = ({sender_name,event,start,end,description}) => {
   
    return (
        <Container>

            <div className="alert alert-custom" role="alert">
                <h4 className="alert-heading"> {sender_name} - {event} </h4>
                <p>{description}</p>
                <p className="mb-0">
                {start === end ? 
                    <span>À {start}</span>
                    :
                    <span>De {start} à {end}</span>
                }
                </p>
            </div>


        </Container>
    )
}

export default AlertForecast
