
import './Cards.css'

function Card({ paymentDate, amount }) {

    return (
        <div className="card">
            <h3 className='card-date'>Date: {paymentDate}</h3>
            <h3 className='card-payment'>Payment Due: $ {amount.toFixed(2)}</h3>
        </div>
    )
}

export default Card;