import React, { Component, Fragment } from 'react';
import Chirp from './chirp';

class ChirpList extends Component {
    
    render() {
        return (
            <Fragment>
                {this.props.chirps.map((chirp) => {
                    
                    return (
                        <Chirp  refresh = {this.props.refresh} key={chirp.id} chirp={chirp} />
                        

                    );
                })}
            </Fragment>
        );
    }
}

export default ChirpList;
