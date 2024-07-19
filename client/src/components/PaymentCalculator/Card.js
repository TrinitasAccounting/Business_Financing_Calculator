
import './Cards.css'

function Card({ paymentDate, amount }) {

    return (
        <div className="card">
            <h3>Date: {paymentDate}</h3>
            <h3>{amount}</h3>
        </div>
    )
}

export default Card;