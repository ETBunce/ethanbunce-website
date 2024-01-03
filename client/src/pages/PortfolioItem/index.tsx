import { useParams } from "react-router-dom";
import { items } from '../../PortfolioItems/PortfolioItems.tsx';

const PortfolioItem = () => {

    const { portfolioItem } = useParams();

    console.log('portfolioItem: ', portfolioItem);

    return (
        <>
            <div>
                {portfolioItem ?
                    <>
                        <div className="m-3"><a href="/portfolio">Back to portfolio</a></div>

                        <h1 className="text-center">{items[portfolioItem].title}</h1>
                        {items[portfolioItem].page}
                    </>
                    :
                    ''
                }
            </div>
        </>
    );

}

export default PortfolioItem;