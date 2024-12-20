import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
// import { useOutlet } from "react-router-dom";

import PaymentCalculator from "./PaymentCalculator/PaymentCalculator";
import PaymentCardDiv from "./PaymentCalculator/PaymentCardDiv";
import PokerTest from "./PokerComponent/PokerTest";

import './PaymentCalculator/Cards.css'

function App() {

  // Actual card state data
  const [cardData, setCardData] = useState({
    purchaseDate: '',
    numberOfPayments: '',
    totalAmount: ''
  })

  console.log(cardData)




  return (
    <div>
      {/* Components and Visuals for the Payment cards */}
      {/* <div className='payment-form'>
        <PaymentCalculator setCardData={setCardData} />
      </div>
      <div className="container">
        <PaymentCardDiv cardData={cardData} />

      </div> */}
      {/* <h1>I believe this will work</h1> */}

      <PokerTest />

    </div>
  )
}

export default App;
