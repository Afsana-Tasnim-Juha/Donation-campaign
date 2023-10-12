import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const SelectedCard = () => {
    const [card, setCard] = useState({});

    const { id } = useParams();
    console.log(id);

    const cards = useLoaderData();
    console.log(cards);

    useEffect(() => {
        const findCard = cards?.find(card => card.id = id)
        setCard(findCard)

    }, [id, cards])
    return (
        <div>

        </div>
    );
};

export default SelectedCard;