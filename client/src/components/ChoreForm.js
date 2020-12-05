import React from 'react';

function ChoreForm() {
    return (
        <div>
            <form action="/submit" method="post">
                <h2>Enter a Chore</h2>
                <input type="text" class="form-control" name="chore" placeholder="What chore do you want to add?" autofocus />
                <input type="text" class="form-control" name="choreOwner" placeholder="Who is responsible for this chore?" autofocus />
                <input type="text" class="form-control" name="choreDate" placeholder="When does this chore need to be completed?" autofocus />
                <button class="btn btn-lg btn-primary btn-block" id="submit" type="submit">Submit</button>
            </form>
        </div>

    );
}

export default ChoreForm;