
import './Cards.css';

import Card from "./Card"

const PaymentCardDiv = ({ cardData }) => {

    // for loop for the number of payments, pushing data to an array of data that cards will be made from 
    // ______________________________________________________________________________________________
    // Adding weeks to a date
    function addWeeks(date, weeks) {
        date.setDate(date.getDate() + 7 * weeks);
        return date;
    }

    let dataForCards = []
    let dateOfPayment = new Date(cardData.purchaseDate)
    // let nextDate = addWeeks(dateOfPayment, 2)
    for (let i = 0; i < cardData.numberOfPayments; i++) {
        dataForCards.push({ paymentDate: dateOfPayment.toISOString().slice(0, 10), amount: cardData.totalAmount / cardData.numberOfPayments })
        dateOfPayment = addWeeks(dateOfPayment, 2)
    }
    console.log(dataForCards);

    // iterate through data array and show a card for each item in array
    // let testIteration = dataForCards.map((item) => {
    //     <Card paymentDate={item.paymentDate} amount={item.amount} />
    // })


    return (
        <div className="Cards">
            {dataForCards.length !== 0 ? dataForCards.map((item) => {
                return (<Card key={item} paymentDate={item.paymentDate} amount={item.amount} />)
            })
                :
                <h3>Submit Payment Selection to Display Payments</h3>
            }
        </div>
    )
}

export default PaymentCardDiv;