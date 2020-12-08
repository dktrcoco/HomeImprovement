import React from 'react';
import axios from 'axios';
// import "/signup.css";

function Signup() {

    // handleSubmit(event) {
    //     event.preventDefault();
    // console.log('sign up form, username" ');
    // console.log(this.state.username);
    // axios.post('/', {
    //     username: this.state.username,
    //     password: this.state.password
    // })
    // .then(response => {
    //     console.log(response)
    //     if(response.data) {
    //         console.log('successful signup')
    //         this.setState({
    //             redirectTo: '/login'
    //         })
    //     } else {
    //         console.log('Sign-up error: ');
    //         console.log(error);
    //     }
    // })
    // }

    return (

        <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="First Name" />
            </div>

            <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Last Name" />
            </div>

            <div className="form-group">
                <label>Username</label>
                <input 
                type="text" 
                className="form-control"
                // value={this.state.username} 
                // onChange={this.handleChange}
                placeholder="Enter Username" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter Password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">Sign in?</a>
            </p>
        </form>
    )
}

// handleSubmit(event) {
//     event.preventDefault();
//     console.log('sign up form, username" ');
//     console.log(this.state.username);
// }

export default Signup;