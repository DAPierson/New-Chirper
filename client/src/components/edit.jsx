import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Edit extends Component {
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
handleInputChange(chirp) {
    this.setState({ text: chirp });
    console.log(this.state.text)
};
putChirp(id,text) {
    fetch(`/api/chirps/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text
        })
    }).then(() => {
        this.props.history.replace('/');
    }).catch((err) => {
        console.log(err);
    });
}




render() {
    return (

<React.Fragment>
<div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text">Edit Chirp</span>
  </div>
  <textarea className="form-control" placeholder ={this.state.text} aria-label="With textarea"
  onChange={(event) => { this.handleInputChange(event.target.value) }}></textarea>
  <button type="button" className="btn btn-primary btn-lg btn-block"
  onClick={() => { this.putChirp(this.props.match.params.id,this.state.text) }}>Save Changes</button>
</div>
        </React.Fragment>
    )
}



}

export default Edit;