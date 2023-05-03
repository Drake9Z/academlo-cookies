const FortuneCard = ({phrase}) => {

    console.log(phrase);

    return(
        <div className="card">
            <p>{phrase.phrase}</p>
            <div className="quote"><i className='bx bxs-quote-alt-right'></i></div>
        </div>
    )

}

export default FortuneCard;