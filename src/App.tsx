import { useState } from 'react'
import './App.css'
import BackOfCard from './assets/deck/Back_of_Card.svg'
import TwoClubs from './assets/deck/Clubs/2_Clubs.svg'
import ThreeClubs from './assets/deck/Clubs/3_Clubs.svg'
import TwoDiamonds from './assets/deck/Diamonds/2_Diamonds.svg'
import ThreeDiamonds from './assets/deck/Diamonds/3_Diamonds.svg'
import AceDiamonds from './assets/deck/Diamonds/A_Diamonds.svg'
import TwoHearts from './assets/deck/Hearts/2_Hearts.svg'
import ThreeHearts from './assets/deck/Hearts/3_Hearts.svg'
import OneHeart from './assets/deck/Hearts/A_Hearts.svg'
import { default as SoltaireLogo } from './assets/deck/Solitaire_logo.svg'
import TwoSpades from './assets/deck/Spades/2_Spades.svg'
import ThreeSpades from './assets/deck/Spades/3_Spades.svg'
import AceSpades from './assets/deck/Spades/A_Spades.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
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
          <h1>Solitaire</h1>
          <p>
            Card Game
          </p>
        </div>
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
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
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
