import { useState } from 'react'
import './App.css'
import BackOfCard from './assets/deck/Back_of_Card.svg'
import TwoClubs from './assets/deck/Clubs/2_Clubs.svg'
import ThreeClubs from './assets/deck/Clubs/3_Clubs.svg'
import './Deck_TS'

import TwoDiamonds from './assets/deck/Diamonds/2_Diamonds.svg'
import ThreeDiamonds from './assets/deck/Diamonds/3_Diamonds.svg'
import AceDiamonds from './assets/deck/Diamonds/A_Diamonds.svg'

import TwoHearts from './assets/deck/Hearts/2_Hearts.svg'
import ThreeHearts from './assets/deck/Hearts/3_Hearts.svg'
import OneHeart from './assets/deck/Hearts/A_Hearts.svg'

import TwoSpades from './assets/deck/Spades/2_Spades.svg'
import ThreeSpades from './assets/deck/Spades/3_Spades.svg'
import AceSpades from './assets/deck/Spades/A_Spades.svg'
//import dec from 'Desk.js'
import { default as SoltaireLogo } from './assets/deck/Solitaire_logo.svg'
//import { type Deck } from './Deck_TS'

function App() {
  const [nextCard, setCount] = useState(0)
  //Button to Start New Game
  //const [start, SetStart] = useState(0); 
  //Button to Start Timer 

  //SetTimer 

  //Declare deck into with 52objects in deck to be call

  //const [carddeck, setDeck] = useState(Deck_TS)
  /*
  //Load Deck from Deck.js file to call each object from the 52 cards in the deck
  const [dec, setDecItem] = useState<Deck | null>(null);

  const [hearts, setHearts] = useState('');
  const [diamonds, setDiamonds] = useState('');
  const [spades, setSpades] = useState('');
  const [clubs, setClubs] = useState('');
dataFile.find()
  
  //Sort into Shapes 13 per shape


  //Sort into Red and Black Colors


  const sortShape = () =>{
    if(dec?.name.endsWith('Hearts'))
    {
      //hearts === setDecItem(dec);
    }
    else if(dec?.name.endsWith('Spades'))
    {

    }
    else if(dec?.name.endsWith('Diamonds'))
    {

    }
    else if(dec?.name.endsWith('Clubs'))
    {

    }
  }
  //Sort into Numbers Method so the App knows order to collect card from Ace to King 
  //Insert into shuffle method to. Most likely Math.random function to shuffle the pack
  //
  const shuffleDeck = () =>{
    Math.random();
  }
  //Deal cards on Columns and Rows. Deal 7 columns and random per row atleast 1 up to 7. 28 card in the columns and rows. 24 cards in the deck left over for play 
  //Move card objects to columns and rows after shuffle deck  
  //Deal 1 card in first and then increment by 1 in reach column until dealt up to 7 card in column 7 
  const dealDeck = () =>{

  }
  //----Game Play methods-----
  //Store the 4 shapes in the form to keep the cards clicked by the player

  //Code a function allow drag of drop of the card to put in shapes and a click function to put cards in shapes

  //Code a method to store all objects for each shape in to order from Ace to King. And make sure method does not allow object to enter shape stack unless in the correct sort order 

  //Click function to click the card to the next card in the Deck leftover to turn card

  //Define that sort Number can be called in a column with mix red and black in descending order

  //Define a method to allow drag and drop for the first seven cards in the column. Only top cards should be accessed.

  //


  */
  return (
    <>
      <section id="center" className='background'>
        <div className="hero">
          <img src={TwoClubs} className="vite" alt="Vite logo" />
          <img src={ThreeClubs} className="vite" alt="Vite logo" />

          <img src={AceDiamonds} className="vite" alt="Vite logo" />
          <img src={TwoDiamonds} className="vite" alt="Vite logo" />
          <img src={ThreeDiamonds} className="vite" alt="Vite logo" />
          <img src={OneHeart} className="vite" alt="Vite logo" />
          <img src={TwoHearts} className="vite" alt="Vite logo" />
          <img src={ThreeHearts} className="vite" alt="Vite logo" />
          <img src={AceSpades} className="vite" alt="Vite logo" />
          <img src={TwoSpades} className="vite" alt="Vite logo" />
          <img src={ThreeSpades} className="vite" alt="Vite logo" />
          <img src={SoltaireLogo} className="cardInitial" alt="React logo" />
    
          
          
        </div>
        <div>
          <h1 className='counter'>Solitaire Card Game In Production</h1>
        </div>
        <table>
          <th></th>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <img src={AceSpades} className="cardInitial" />
              </div>
              <div className="flip-card-back">
                <img src={BackOfCard} className="flip-card-back"  />
              </div>
            </div>
          </div>
          <th>
            <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <img src={TwoHearts} className="cardInitial" />
              </div>
              <div className="flip-card-back">
              <img src={BackOfCard} className="flip-card-back"  />
              </div>
            </div>
          </div>
        </th>



          
        </table>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Select New Card from Deck:{nextCard}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>POS Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://" target="_blank">
                <img className="logo" src={SoltaireLogo} alt="" />
                Explore POS System
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={SoltaireLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the POS Inaxtor Community</p>
          <ul>
            <li>
              <a href="https://github.com" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>

            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>

            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
