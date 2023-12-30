const SiteApps = () => {

    return (
        <>
            <h1 className="h-list">Apps</h1>
            <p className="subtitle-list">For your productivity and enjoyment</p>

            <div className="list">
                <div className="d-flex justify-content-center">
                    <img className="m-1" src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" height={"100px"} />
                    <div className="m-1">
                        <h2>Click the Button</h2>
                        <p>A button that tracks the number of times it has been clicked by anone on the site. Work together with the rest of the world to make the small number go big.</p>
                    </div>
                    <div className="m-auto">
                        <a className="btn btn-success m-1" href="/apps/click-the-button">Go</a>
                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <img className="m-1" src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" height={"100px"} />
                    <div className="m-1">
                        <h2>Real One</h2>
                        <p>A game in which you must impersonate your friends or try to guess who the real one is.</p>
                    </div>
                    <div className="m-auto">
                        <a className="btn btn-success m-1" href="/apps/real-one">Go</a>
                    </div>

                </div>

            </div >
        </>
    );

}

export default SiteApps;