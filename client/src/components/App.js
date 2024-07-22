import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import PaymentCalculator from "./PaymentCalculator/PaymentCalculator";
import PaymentCardDiv from "./PaymentCalculator/PaymentCardDiv";

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
      <div className='payment-form'>
        <PaymentCalculator setCardData={setCardData} />
      </div>
      <div className="container">
        <PaymentCardDiv cardData={cardData} />

      </div>

    </div>
  )
}

export default App;
