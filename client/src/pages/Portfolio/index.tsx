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
                        src={item.image} /></a>
                </div>
                <div className='col-md-6'>
                    <div className='m-md-0 m-3'>
                        {item.summary}
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className='d-flex justify-content-center'>
                        <a className='go-button btn btn-success m-2' href={"/portfolio/" + item.name}>
                            Go
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

const Portfolio = () => {

    return (
        <>
            <div className="d-flex justify-content-center">
                <div>
                    <h1 className='text-center'>Portfolio</h1>
                    <h4 className='subtitle text-center'>Ethan Bunce</h4>
                    <div className='container'>
                        {PortfolioListItem(PortfolioItems.PortfolioSite)}
                        {PortfolioListItem(PortfolioItems.AlgoGauge)}
                        <hr />
                    </div>

                </div>
            </div>
        </>
    );

}

export default Portfolio;