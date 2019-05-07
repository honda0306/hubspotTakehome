import React from 'react';

const ListView = props => {
    return (
        <div>
            {props.attendees.map(attendee => (
                <div key={attendee.name}>
                    <h2>{attendee.firstName} {attendee.lastName}</h2>
                    <h2>{attendee.availableDates}</h2>
                    <h2>{attendee.country}</h2>
                    <br />
                </div>
            ))}
        </div>
    )
}

export default ListView;