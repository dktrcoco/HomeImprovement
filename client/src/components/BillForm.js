import React from 'react';

function BillForm() {
    return (
        <div>
            <form action="/submit" method="post">
                <h2>Enter a Bill</h2>
                <input type="text" class="form-control" name="bill" placeholder="What bill do you want to add?" autofocus />
                <input type="text" class="form-control" name="billValue" placeholder="How much is owed?" autofocus />
                <input type="text" class="form-control" name="billDate" placeholder="When is this bill due?" autofocus />
                <button class="btn btn-lg btn-primary btn-block" id="submit" type="submit">Submit</button>
            </form>
        </div>

    );
}

export default BillForm;