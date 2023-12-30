import './index.css'

const AlgoGaugePage = () => {
    return (
        <>
            <div className='text-start m-4'>
                <div>
                    AlgoGauge was a university capstone project I created with
                    an excellent group of fellow students.
                </div>
                <br />
                <div>Contributors:</div>
                <div>Ethan Bunce - Much of the backend work</div>
                <div>Justin Singh - Most of the frontend work</div>
                <div>John DeGrey - Deployment, C++</div>
                <div>Daxton Butler - General</div>
            </div>
            <div className='text-center'>
                <img className="page-image" src="/Portfolio/AlgoGauge/AlgoGaugeHome.png" />
                <img className="page-image" src="/Portfolio/AlgoGauge/AlgoGaugeExperimentRunning.png" />
                <img className="page-image" src="/Portfolio/AlgoGauge/AlgoGaugeQueue.png" />
                <img className="page-image" src="/Portfolio/AlgoGauge/AlgoGaugeHistory.png" />
                <img className="page-image" src="/Portfolio/AlgoGauge/AlgoGaugeResults.png" />
            </div >
        </>
    );
}

export default AlgoGaugePage