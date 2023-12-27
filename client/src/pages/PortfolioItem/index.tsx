import { useParams } from "react-router-dom";
import PortfolioItems from "../../PortfolioItems/AllPortfolioItems";
import AlgoGaugePage from "./PortfolioItemPages/AlgoGauge";

const pages = {
    AlgoGauge: <AlgoGaugePage />
}

const PortfolioItem = () => {

    const { portfolioItem } = useParams();

    console.log('portfolioItem: ', portfolioItem);

    return (
        <>
            <div>
                {portfolioItem ?
                    <>
                        <div className="m-3"><a href="/portfolio">Back to portfolio</a></div>

                        <h1 className="text-center">{PortfolioItems[portfolioItem].title}</h1>
                        {pages[portfolioItem]}
                    </>
                    :
                    ''
                }
            </div>
        </>
    );

}

export default PortfolioItem;