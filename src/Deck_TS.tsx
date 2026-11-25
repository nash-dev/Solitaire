import TenSpades from './assets/deck/Spades/10_Spades.svg'
import TwoSpades from './assets/deck/Spades/2_Spades.svg'
import ThreeSpades from './assets/deck/Spades/3_Spades.svg'
import Fourpades from './assets/deck/Spades/4_Spades.svg'
import FiveSpades from './assets/deck/Spades/5_Spades.svg'
import SixSpades from './assets/deck/Spades/6_Spades.svg'
import SevenSpades from './assets/deck/Spades/7_Spades.svg'
import EightSpades from './assets/deck/Spades/8_Spades.svg'
import NineSpades from './assets/deck/Spades/9_Spades.svg'
import ASpades from './assets/deck/Spades/A_Spades.svg'
import JSpades from './assets/deck/Spades/Jack_Spades.svg'
import KSpades from './assets/deck/Spades/King_Spades.svg'
import QSpades from './assets/deck/Spades/Queen_Spades.svg'

import TenDiamonds from './assets/deck/Diamonds/10_Diamonds.svg'
import TwoDiaomnds from './assets/deck/Diamonds/2_Diamonds.svg'
import ThreeDiamonds from './assets/deck/Diamonds/3_Diamonds.svg'
import FourDiamonds from './assets/deck/Diamonds/4_Diamonds.svg'
import FiveDiamonds from './assets/deck/Diamonds/5_Diamonds.svg'
import SixDiamonds from './assets/deck/Diamonds/6_Diamonds.svg'
import SevenDiamonds from './assets/deck/Diamonds/7_Diamonds.svg'
import EightDiamonds from './assets/deck/Diamonds/8_Diamonds.svg'
import NineDiamonds from './assets/deck/Diamonds/9_Diamonds.svg'
import ADiamonds from './assets/deck/Diamonds/A_Diamonds.svg'
import JDiamonds from './assets/deck/Diamonds/Jack_Diamonds.svg'
import KDiamonds from './assets/deck/Diamonds/King_Diamonds.svg'
import QDiamonds from './assets/deck/Diamonds/Queen_Diamonds.svg'

import TenHearts from './assets/deck/Hearts/10_Hearts.svg'
import TwoHearts from './assets/deck/Hearts/2_Hearts.svg'
import ThreeHearts from './assets/deck/Hearts/3_Hearts.svg'
import FourHearts from './assets/deck/Hearts/4_Hearts.svg'
import FiveHearts from './assets/deck/Hearts/5_Hearts.svg'
import SixHearts from './assets/deck/Hearts/6_Hearts.svg'
import SevenHearts from './assets/deck/Hearts/7_Hearts.svg'
import EightHearts from './assets/deck/Hearts/8_Hearts.svg'
import NineHearts from './assets/deck/Hearts/9_Hearts.svg'
import AHeart from './assets/deck/Hearts/A_Hearts.svg'
import JHearts from './assets/deck/Hearts/Jack_Hearts.svg'
import KHearts from './assets/deck/Hearts/King_Hearts.svg'
import QHearts from './assets/deck/Hearts/Queen_Hearts.svg'

import TenClubs from './assets/deck/Clubs/10_Clubs.svg'
import TwoClubs from './assets/deck/Clubs/2_Clubs.svg'
import ThreeClubs from './assets/deck/Clubs/3_Clubs.svg'
import FourClubs from './assets/deck/Clubs/4_Clubs.svg'
import FiveClubs from './assets/deck/Clubs/5_Clubs.svg'
import SixClubs from './assets/deck/Clubs/6_Clubs.svg'
import SevenClubs from './assets/deck/Clubs/7_Clubs.svg'
import EightClubs from './assets/deck/Clubs/8_Clubs.svg'
import NineClubs from './assets/deck/Clubs/9_Clubs.svg'
import AClubs from './assets/deck/Clubs/A_Clubs.svg'
import JClubs from './assets/deck/Clubs/Jack_Clubs.svg'
import KClubs from './assets/deck/Clubs/King_Clubs.svg'
import QClubs from './assets/deck/Clubs/Queen_Clubs.svg'

export interface Deck 
  {
	id: number,
	name: string,
	imgLink: String
  }

export const dataFile: Deck[] = [
    { id: 1, name: "A_Spades", imgLink: ASpades},
    { id: 2, name: "A_Clubs", imgLink: AClubs},
    { id: 3, name: "A_Diamonds", imgLink: ADiamonds},
	{ id: 4, name: "A_Hearts", imgLink: AHeart},
	{ id: 5, name: "2_Spades", imgLink: TwoSpades},
	{ id: 6, name: "2_Clubs", imgLink: TwoClubs},
	{ id: 7, name: "2_Diamonds", imgLink: TwoDiaomnds},
	{ id: 8, name: "2_Hearts", imgLink:TwoHearts},
	{ id: 9, name: "3_Spades", imgLink:ThreeSpades},
	{ id: 10, name: "3_Clubs", imgLink:ThreeClubs},
	{ id: 11, name: "3_Diamonds", imgLink:ThreeDiamonds},
	{ id: 12, name: "3_Hearts", imgLink:ThreeHearts},
	{ id: 13, name: "4_Spades", imgLink:Fourpades},
	{ id: 14, name: "4_Clubs", imgLink:FourClubs},
	{ id: 15, name: "4_Diamonds", imgLink:FourDiamonds},
	{ id: 16, name: "4_Hearts", imgLink:FourHearts},
	{ id: 17, name: "5_Spades", imgLink:FiveSpades},
	{ id: 18, name: "5_Clubs", imgLink:FiveClubs},
	{ id: 19, name: "5_Diamonds", imgLink:FiveDiamonds},
	{ id: 20, name: "5_Hearts", imgLink:FiveHearts},
	{ id: 21, name: "6_Spades", imgLink:SixSpades},
	{ id: 22, name: "6_Clubs", imgLink:SixClubs},
	{ id: 23, name: "6_Diamonds", imgLink:SixDiamonds},
	{ id: 24, name: "6_Hearts", imgLink:SixHearts},
	{ id: 25, name: "7_Spades", imgLink:SevenSpades},
	{ id: 26, name: "7_Clubs", imgLink:SevenClubs},
	{ id: 27, name: "7_Diamonds", imgLink:SevenDiamonds},
	{ id: 28, name: "7_Hearts", imgLink:SevenHearts},
	{ id: 29, name: "8_Spades", imgLink:EightSpades},
	{ id: 30, name: "8_Clubs", imgLink:EightClubs},
	{ id: 31, name: "8_Diamonds", imgLink:EightDiamonds},
	{ id: 32, name: "8_Hearts", imgLink:EightHearts},
	{ id: 33, name: "9_Spades", imgLink:NineSpades},
	{ id: 34, name: "9_Clubs", imgLink:NineClubs},
	{ id: 35, name: "9_Diamonds", imgLink:NineDiamonds},
	{ id: 36, name: "9_Hearts", imgLink:NineHearts},
	{ id: 37, name: "10_Spades", imgLink:TenSpades},
	{ id: 38, name: "10_Clubs", imgLink:TenClubs},
	{ id: 39, name: "10_Diamonds", imgLink:TenDiamonds},
	{ id: 40, name: "10_Hearts", imgLink:TenHearts},
	{ id: 41, name: "J_Spades", imgLink:JSpades},
	{ id: 42, name: "J_Clubs", imgLink:JClubs},
	{ id: 43, name: "J_Diamonds", imgLink:JDiamonds},
	{ id: 44, name: "J_Hearts", imgLink:JHearts},
	{ id: 45, name: "Q_Spades", imgLink:QSpades},
	{ id: 46, name: "Q_Clubs", imgLink:QClubs},
	{ id: 47, name: "Q_Diamonds", imgLink:QDiamonds},
	{ id: 48, name: "Q_Hearts", imgLink:QHearts},
	{ id: 49, name: "K_Spades", imgLink:KSpades},
	{ id: 50, name: "K_Clubs", imgLink:KClubs},
	{ id: 51, name: "K_Diamonds", imgLink:KDiamonds},
	{ id: 52, name: "K_Hearts", imgLink:KHearts}
];                   
