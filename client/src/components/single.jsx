import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Single extends Component {
    constructor(props) {
        super(props)


        this.state = {
            
         }


    }


    componentDidMount() {
        fetch(`/api/chirps/${this.props.match.params.id}`)
        .then((res) => {
            return res.json();
        })
        .then((res) => {

            this.setState(res)
        })

}
delChirp(id) {
    fetch(`/api/chirps/${id}`, {
        method: 'DELETE',
    }).then(() => {
        this.props.history.goBack();
    }).catch((err) => {
        console.log(err);
    });
}




    render() {
        return (

<React.Fragment>
            <p> {this.state.text}</p>
            <Link to={`/${this.props.match.params.id}/edit`}>  <button>Edit</button>  </Link>
<button
onClick={() => { this.delChirp(this.props.match.params.id) }}>Delete</button>

            </React.Fragment>
        )
    }


}





export default Single