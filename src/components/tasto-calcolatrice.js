import React, { Component } from 'react';

class Tasti extends Component {
    render() {
        return (
            <button onClick={() => this.props.onClick(this.props.tastoProps.value)} className={this.props.tastoProps.col + " " + this.props.tastoProps.buttonStyle + " pt-1 pb-1"} style={{ width: this.props.tastoProps.width, margin: '0.33rem' }} name="bottone" value={this.props.tastoProps.value}>
                {this.props.tastoProps.tasto}
            </button>)
    }
}

export default Tasti;