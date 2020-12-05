import React from 'react';

function EventForm() {
    return (
        <div>
            <form action="/submit" method="post">
                <h2>Enter an Event</h2>
                <input type="text" class="form-control" name="event" placeholder="What event do you want to add?" autofocus />
                <input type="text" class="form-control" name="eventDate" placeholder="When is this event taking place?" autofocus />
                <button class="btn btn-lg btn-primary btn-block" id="submit" type="submit">Submit</button>
            </form>
        </div>

    );
}

export default EventForm;