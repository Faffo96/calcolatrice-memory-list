import React, { Component } from 'react';
import Emoji from 'react-emoji';

class Cards extends Component {
  render() {
    const { cardProps, stato } = this.props;
    const isCoperto = stato === 'coperto';
    const buttonStyle = {
      width: cardProps.width,
      height: cardProps.height,
      margin: '0.33rem',
      backgroundColor: isCoperto ? 'white' : '',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
    

    return (
      <button
        onClick={() => this.props.onClick(cardProps.coppia)}
        className={`${cardProps.col} ${cardProps.cardStyle} pt-1 pb-1`}
        style={buttonStyle}
        name="card"
        emoji={cardProps.emoji}
      >
        {/* Utilizzo del componente Emoji per visualizzare l'emoji */}
        {isCoperto ? '' : Emoji.emojify(cardProps.emoji)}
      </button>
    );
  }
}

export default Cards;