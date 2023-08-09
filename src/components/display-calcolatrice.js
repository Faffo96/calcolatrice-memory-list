import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div className="bg-light" style={{ width: '90%', height: '40px' }}>
                {this.props.primoAddendo}
            </div>
        );
    }
}

export default Display;