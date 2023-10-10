const Card = ({ card }) => {
    const { picture, title, category, category_bg, title_text, } = card;

    const cardStyle = {
        backgroundColor: category_bg,
        color: title_text,



    };

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl" style={cardStyle}>
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="" >{category}</p>
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
        </div >
    );
};

export default Card;
