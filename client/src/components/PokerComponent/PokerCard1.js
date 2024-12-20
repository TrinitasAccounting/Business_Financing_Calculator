

function PokerCard1({ pokerCards }) {

    // console.log(pokerCards);

    let firstPokerCard = pokerCards.filter((card) => {
        return (card === 'A')
    })

    console.log(firstPokerCard);

    return (

        <>
            <div>
                <h1>{pokerCards.card1}</h1>
            </div>
            <div>
                <h1>{pokerCards.card2}</h1>
            </div>

        </>
    )
}

export default PokerCard1;