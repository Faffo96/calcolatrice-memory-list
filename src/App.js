import './App.css';
import React, { Component } from 'react';
import Tasti from './components/tasto-calcolatrice';
import Cards from './components/card-memory.js';
import Display from './components/display-calcolatrice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { id: 0, emoji: '🐶', coppia: '1', stato: 'coperto', col: 'col-6', width: '40px', height: '40px', cardStyle: 'btn btn-danger rounded p-1' },
        { id: 1, emoji: '🐶', coppia: '1', stato: 'coperto', col: 'col-6', width: '40px', height: '40px', cardStyle: 'btn btn-danger rounded p-1' },
        { id: 2, emoji: '🐻', coppia: '2', stato: 'coperto', col: 'col-6', width: '40px', height: '40px', cardStyle: 'btn btn-primary rounded p-1' },
        { id: 3, emoji: '🐻', coppia: '2', stato: 'coperto', col: 'col-6', width: '40px', height: '40px', cardStyle: 'btn btn-primary rounded p-1' },
        { id: 4, emoji: '🐼', coppia: '3', stato: 'coperto', col: 'col-6', width: '40px', height: '40px', cardStyle: 'btn btn-success rounded p-1' },
        { id: 5, emoji: '🐼', coppia: '3', stato: 'coperto', col: 'col-6', width: '40px', height: '40px', cardStyle: 'btn btn-success rounded p-1' },
        { id: 6, emoji: '🐰', coppia: '4', stato: 'coperto', col: 'col-6', width: '40px', height: '40px', cardStyle: 'btn btn-warning rounded p-1' },
        { id: 7, emoji: '🐰', coppia: '4', stato: 'coperto', col: 'col-6', width: '40px', height: '40px', cardStyle: 'btn btn-warning rounded p-1' },
      ], height: '50px',
      tasti: [
        { id: 0, tasto: "7", value: 7, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
        { id: 1, tasto: "8", value: 8, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
        { id: 2, tasto: "9", value: 9, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
        { id: 3, tasto: "+", value: "+", col: "col-3", width: "20%", buttonStyle: "btn btn-warning rounded" },
        { id: 4, tasto: "4", value: 4, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
        { id: 5, tasto: "5", value: 5, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
        { id: 6, tasto: "6", value: 6, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
        { id: 7, tasto: "-", value: "-", col: "col-3", width: "20%", buttonStyle: "btn btn-warning rounded" },
        { id: 8, tasto: "1", value: 1, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
        { id: 9, tasto: "2", value: 2, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
        { id: 10, tasto: "3", value: 3, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
        { id: 11, tasto: "X", value: "*", col: "col-3", width: "20%", buttonStyle: "btn btn-warning rounded" },
        { id: 12, tasto: ".", value: ".", col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
        { id: 13, tasto: "0", value: 0, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
        { id: 14, tasto: "C", value: "C", col: "col-3", width: "20%", buttonStyle: "btn btn-danger rounded" },
        { id: 15, tasto: "/", value: "/", col: "col-3", width: "20%", buttonStyle: "btn btn-warning rounded" },
        { id: 16, tasto: "=", value: "=", col: "col-12", width: "95%", buttonStyle: "btn btn-warning rounded" }
      ],
      primoAddendo: null,
      secondoAddendo: null,
      operatore: null,
      risultato: null,
      log: "",
      isContainerOpen: false,
      isContainerOpen2: true,
      coppieScoperte: 0
    };
  }
  componentDidMount() {
    this.shuffleCards(); // Mischia le carte quando il componente si monta
  }

  shuffleCards = () => {
    const { cards } = this.state;
    const shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    this.setState({ cards: shuffledCards });
  }

  ripristinaCarte = () => {
    const { cards } = this.state;
    const resetCards = cards.map(card => {
      return { ...card, stato: 'coperto' };
    });
    this.setState({ cards: resetCards, coppieScoperte: 0 });
  }
  /* FUNZIONALITA CALCOLATRICE + LOG */

  salvaUltimoBottonePremuto = (value) => {
    // Controlla se il valore del tasto premuto è "="
    if (value === "=") {
      // Esegui l'operazione
      this.eseguiOperazione();
    } else {
      // Controlla se il valore del tasto premuto è "C" (cancellazione)
      if (value === "C") {
        // Svuota le variabili e il display
        this.setState({ primoAddendo: null, secondoAddendo: null });
      }
      // Controlla se il valore del tasto premuto è uno degli operatori (+, -, *, /)
      else if (value === "+" || value === "-" || value === "*" || value === "/") {
        // Svuota il display e crea una nuova variabile per il secondo addendo
        this.setState({ primoAddendo: null, secondoAddendo: this.state.primoAddendo, operatore: value });
      } else {
        // Controlla se è già stato premuto un pulsante
        if (this.state.primoAddendo !== null) {
          // Aggiungi il nuovo valore al valore precedente
          this.setState({ primoAddendo: this.state.primoAddendo + '' + value });
        } else {
          this.setState({ primoAddendo: value });
        }
      }
    }
  }

  eseguiOperazione = () => {
    const { secondoAddendo, primoAddendo, operatore, log } = this.state;

    if (primoAddendo !== null && secondoAddendo !== null && operatore !== null) {
      let risultato;

      switch (operatore) {
        case "+":
          risultato = parseFloat(primoAddendo) + parseFloat(secondoAddendo);
          break;
        case "-":
          risultato = parseFloat(secondoAddendo) - parseFloat(primoAddendo);
          break;
        case "*":
          risultato = parseFloat(primoAddendo) * parseFloat(secondoAddendo);
          break;
        case "/":
          risultato = parseFloat(secondoAddendo) / parseFloat(primoAddendo);
          break;
        default:
          break;
      }

      let nuovoLog = `${log}${primoAddendo}\n${operatore}\n${secondoAddendo}\n=\n${risultato}\n`;

      this.setState({ primoAddendo: risultato, secondoAddendo: null, operatore: null, log: nuovoLog });
    }
  }
  /* BOTTONE ANIMAZIONE LOG */
  handleIconClick = () => {
    this.setState(prevState => ({
      isContainerOpen: !prevState.isContainerOpen,
    }));
  };

  handleIconClick2 = () => {
    this.setState(prevState => ({
      isContainerOpen2: !prevState.isContainerOpen2,
    }));
  };

  // Funzione per gestire il clic su una carta
  handleClickCard(cardId) {
    const { cards } = this.state;
    const clickedCardIndex = cards.findIndex(card => card.id === cardId);
    const clickedCard = cards[clickedCardIndex];

    // If the clicked card is already uncovered or matched, do nothing
    if (clickedCard.stato === 'scoperto' || clickedCard.stato === 'abbinate') {
      return;
    }

    // Update the clicked card to a uncovered state
    const updatedCard = { ...clickedCard, stato: 'scoperto' };
    const updatedCards = [...cards];
    updatedCards[clickedCardIndex] = updatedCard;
    const allCardsMatched = this.state.cards.every(card => card.stato === 'abbinate');

    // Find the second uncovered card, if any
    const uncoveredCards = updatedCards.filter(card => card.stato === 'scoperto');
    if (uncoveredCards.length === 2) {
      // Check if the two uncovered cards have the same "coppia" attribute
      if (uncoveredCards[0].coppia === uncoveredCards[1].coppia) {
        // If the cards match, update their state to "abbinate"
        updatedCards.forEach(card => {
          if (card.stato === 'scoperto') {
            card.stato = 'abbinate';
          }
        });
      } else {
        // If the cards don't match, cover them again after a short delay
        setTimeout(() => {
          updatedCards.forEach(card => {
            if (card.stato === 'scoperto') {
              card.stato = 'coperto';
            }
          });
          this.setState({ cards: updatedCards });
        }, 1000); // Change the delay time as desired
      }
    }

    this.setState({ cards: updatedCards });
  }

  render() {
    const { isContainerOpen } = this.state;
    const { isContainerOpen2 } = this.state;
    const allCardsMatched = this.state.cards.every(card => card.stato === 'abbinate');

    let winMessage = null;
    if (allCardsMatched) {
      winMessage = (
        <div className="container rounded bg-dark" style={{ left: '550px', maxWidth: '203px', height: 'auto', textAlign: 'center' }}>
          <div className="row">
          <h6 style={{ color: '#ffc107' }}>Hai Vinto!</h6>
          <button className="btn btn-primary fontsize" style={{ width: '130px', fontSize: 'xx-small'}} onClick={() => { this.shuffleCards(); this.ripristinaCarte(); }}>Gioca Ancora</button>
          </div>
        </div>
      );
    }

    return (
      <>
        {/* HTML LOG */}
        <div className={`container mt-5 rounded bg-dark pb-3 ${isContainerOpen2 ? 'open2 container-shadow-closed2' : 'closed2 container-shadow2'}`} style={{ transition: 'transform 2s ease,  box-shadow 2s ease', position: 'absolute', left: '342px', maxWidth: '203px', height: '401px', border: "3px solid #ffc107" }}>
          <div className={`row pt-4 pb-4`}>
            <div className="col-6 p-0" style={{ marginLeft:'20px', cursor: 'pointer', color: '#ffc107', backgroundColor: '#212529', border: '1px solid #212529', width: '145px', height: '340px' }} >
              <p style={{ textAlign: 'center' }}>{"MEMORY\n" + this.state.log}</p>
              <div className='container' style={{ height: '285px'}}>
                <div className="row m-0" style={{paddingLeft:'4px'}}>
                  {this.state.cards.map(card => (
                    <Cards
                      key={card.id}
                      onClick={() => this.handleClickCard(card.id)}  // Utilizza la funzione personalizzata per il clic sulla carta
                      cardProps={card}
                      stato={card.stato}
                    />
                  ))}
                </div>
                {winMessage}
              </div>
            </div>
            <FontAwesomeIcon
              className="col-6 p-0" icon={faChevronRight} style={{ color: "#ffc107", marginTop: "185px", width: '15px', cursor: 'pointer' }} onClick={this.handleIconClick2} />
          </div>
        </div>

        <div className={`container mt-5 rounded bg-dark pb-3 ${isContainerOpen ? 'open container-shadow' : 'closed container-shadow-closed'}`} style={{ transition: 'transform 2s ease,  box-shadow 2s ease', position: 'absolute', left: '0px', maxWidth: '203px', height: '401px', border: "3px solid #ffc107" }}>
          <div className={`row pt-4 pb-4`}>
            <FontAwesomeIcon
              className="col-6" icon={faChevronLeft} style={{ color: "#ffc107", marginTop: "185px", width: '15px', cursor: 'pointer' }} onClick={this.handleIconClick} />
            <textarea readOnly className="col-6 p-0" style={{ cursor: 'pointer', whiteSpace: 'pre-wrap', overflow: 'auto', color: '#ffc107', backgroundColor: '#212529', border: '1px solid #212529', width: '150px', height: '340px' }} value={"LOG\n" + this.state.log} />
          </div>
        </div>
        {/* HTML calcolatrice */}
        <div className="container mt-5 rounded bg-dark pb-3" style={{ position: 'absolute', left: '200px', maxWidth: '300px', border: "3px solid #ffc107", boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.25)' }}>
          <div className="row mt-4 mb-4 rounded" style={{ justifyContent: 'center' }}>
            <Display primoAddendo={this.state.primoAddendo} />
          </div>
          <div className="row m-0">
            {this.state.tasti.map(tasto => (
              <Tasti
                key={tasto.id}
                onClick={this.salvaUltimoBottonePremuto}
                tastoProps={tasto}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
