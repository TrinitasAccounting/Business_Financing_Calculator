
import { useState } from "react";
import Card from "../PaymentCalculator/Card";

import PokerCard1 from "./PokerCard1";


function PokerTest() {

    const [pokerCards, setPokerCards] = useState([
        'A',
        'K',
        'Q',
        'J'
    ]
    )

    console.log(pokerCards);

    return (

        <div>
            <h1>Poker Tester is working</h1>
            {/* <h1>{pokerCards.card1} {pokerCards.card2}</h1> */}
            <PokerCard1 pokerCards={pokerCards} />

        </div>
    )
}

export default PokerTest;