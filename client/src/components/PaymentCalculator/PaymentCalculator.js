
import { useState } from "react";


function PaymentCalculator({ setCardData }) {

    // Initial Payment Data for form state 
    const [paymentForm, setPaymentForm] = useState({
        purchaseDate: '',
        numberOfPayments: 4,
        totalAmount: 100
    })

    // On change of input field for controlled form
    function onChangeOfForm(event) {
        let newPaymentForm = { ...paymentForm, [event.target.name]: event.target.value }
        setPaymentForm(newPaymentForm)
    }

    // On Submit function for the form to update the number of payment cards
    function onSubmitOfForm(event) {
        event.preventDefault()
        setCardData(paymentForm)
    }


    return (
        <>
            <form onSubmit={onSubmitOfForm}>
                <label style={{ padding: '10px' }}>Date of Purchase:
                    <input style={{ padding: '8px', margin: '3px' }} name='purchaseDate' type="date" onChange={onChangeOfForm} value={paymentForm.purchaseDate} />
                </label>
                <label style={{ padding: '10px' }}># of Payments:
                    <input style={{ padding: '8px', margin: '3px' }} name='numberOfPayments' type="number" onChange={onChangeOfForm} value={paymentForm.numberOfPayments} />
                </label>
                <label style={{ padding: '10px' }}>Total Amount:
                    <input style={{ padding: '8px', margin: '3px' }} name='totalAmount' type="number" onChange={onChangeOfForm} value={paymentForm.totalAmount} />
                </label>
                <button style={{ height: '20px' }} type='submit'>Submit</button>
            </form>
        </>
    )
}

export default PaymentCalculator;