import React from 'react';

function GroceryForm() {
    return (
        <div>
            <form action="/submit" method="post">
                <h2>Enter a Grocery Item</h2>
                <input type="text" class="form-control" name="grocery" placeholder="What grocery item do you want to add?" autofocus />
                <button class="btn btn-lg btn-primary btn-block" id="submit" type="submit">Submit</button>
            </form>
        </div>

    );
}

export default GroceryForm;