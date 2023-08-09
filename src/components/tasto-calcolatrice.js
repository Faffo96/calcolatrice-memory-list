import React, { Component } from 'react';

class tasti extends Component {
    render() {
        return (
            <button className={this.props.col + " " + this.props.buttonStyle + " pt-1 pb-1"} style={{ width: this.props.width, margin: '0.33rem' }} name="bottone" value={this.props.value}>
                {this.props.tasto}
            </button>)
    }
}

export default tasti;