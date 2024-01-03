import classes from './index.module.css'
import { PortfolioItem, items } from '../../PortfolioItems/PortfolioItems.tsx'

const PortfolioListItem = (item: PortfolioItem) => {
    return (
        <>
            <hr />
            <h3 className='text-center'>{item.title}</h3>
            <div className='row justify-content-center'>
                <div className='col-md-4 text-md-end text-center'>
                    <a href={"/portfolio-item/" + item.name}><img className={classes['thumbnail']}
                        src={item.image} /></a>
                </div>
                <div className='col-md-6'>
                    <div className='m-md-0 m-3'>
                        {item.summary}
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className='d-flex justify-content-center'>
                        <a className={classes['go-button'] + ' btn btn-success m-2'} href={"/portfolio-item/" + item.name}>
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
                    <h4 className={classes.subtitle + ' text-center'}>Ethan Bunce</h4>
                    <div className='container'>
                        {Object.values(items).map(value => PortfolioListItem(value))}
                        <hr />
                    </div>

                </div>
            </div >
        </>
    );

}

export default Portfolio;