import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Chirp extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    delChirp(id) {
        fetch(`/api/chirps/${id}`, {
            method: 'DELETE',
        }).then(() => {
            this.props.refresh;
        }).catch((err) => {
            console.log(err);
        });
    }
    


render() {
    return (
        <div className="card m-1" >
            <div className="card-body text-left">
                <p className="card-text">
                    {this.props.chirp.id} - {this.props.chirp.text}
                     <Link to={`/${this.props.chirp.id}`}>  <button>Select</button>  </Link>
                </p>

            </div>
        </div>
    )
};
};

export default Chirp;
