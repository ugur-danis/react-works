const Card = ({ data }) => {

    const handleClickCard = e => {
    };

    return (
        <div className={`flip-card ${data.flipped ? 'flipped' : ''}`} onClick={handleClickCard}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    ?
                </div>
                <div className="flip-card-back">
                    <img src={'img/' + data.img} alt={data.img} />
                </div>
            </div>
        </div>
    );
};

export default Card;