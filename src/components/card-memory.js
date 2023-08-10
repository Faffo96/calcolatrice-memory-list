import React, { Component } from 'react';
import Emoji from 'react-emoji';

class Cards extends Component {
    render() {
        return (
            <button onClick={() => this.props.onClick(this.props.cardProps.value)} className={this.props.cardProps.col + " " + this.props.cardProps.cardStyle + " pt-1 pb-1"} style={{ width: this.props.cardProps.width, margin: '0.33rem' }} name="card" emoji={this.props.cardProps.emoji}>
                {/* Utilizzo del componente Emoji per visualizzare l'emoji */}
                {Emoji.emojify(this.props.cardProps.emoji)}
            </button>
        );
    }
}

export default Cards;