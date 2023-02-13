const Card = ({ data, handleClickCard }) => {
    return (
        <div className={`flip-card ${data.flipped || data.matched ? 'flipped' : ''}`} onClick={e => handleClickCard(e, data)}>
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