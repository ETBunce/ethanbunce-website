import './index.css'
import PortfolioItem from '../../PortfolioItems/PortfolioItem'
import PortfolioItems from '../../PortfolioItems/AllPortfolioItems'

const PortfolioListItem = (item: PortfolioItem) => {
    return (
        <>
            <hr />
            <h3 className='text-center'>{item.title}</h3>
            <div className='row justify-content-center'>
                <div className='col-md-4 text-md-end text-center'>
                    <a href={"/portfolio/" + item.name}><img className='thumbnail'
                        src={"/Portfolio/AlgoGauge/" + item.image} /></a>
                </div>
                <div className='col-md-8'>
                    {item.summary}
                </div>
            </div>
        </>
    )
}

const Portfolio = () => {

    console.log('base url: ', import.meta.env.BASE_URL);

    return (
        <>
            <div className="d-flex justify-content-center">
                <div>
                    <h1 className='text-center'>Portfolio</h1>
                    <h4 className='subtitle text-center'>Ethan Bunce</h4>
                    <div className='container'>
                        {PortfolioListItem(PortfolioItems[0])}
                        <hr />
                    </div>

                </div>
            </div>
        </>
    );

}

export default Portfolio;