import { useParams } from "react-router-dom";

const PortfolioItem = () => {

    const { portfolioItem } = useParams();

    console.log('portfolioItem: ', portfolioItem);

    return (
        <>
            <div>
                <h1>{portfolioItem}</h1>
            </div>
        </>
    );

}

export default PortfolioItem;