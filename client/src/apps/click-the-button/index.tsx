import { useEffect, useState } from 'react';
import './index.css'
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

// const getClickCountUrl = 'http://www.ethanbunce.com/api/click-the-button/count'
// const clickUrl = 'http://www.ethanbunce.com/api/click-the-button/click'

// const getClickCountUrl = 'http://localhost:5000/api/click-the-button/count'
// const clickUrl = 'http://localhost:5000/api/click-the-button/click'

const getClickCountUrl = apiUrl + 'click-the-button/count'
const clickUrl = apiUrl + 'click-the-button/click'

const ClickButtonApp = () => {

    const [clickCount, setClickCount] = useState(0);

    const updateCount = (newCount) => {
        newCount = Number(newCount);
        const oldCount = Number(clickCount);
        if (newCount > oldCount) {
            console.log(`${newCount} > ${oldCount}`);
            setClickCount(newCount);
        } else {
            console.log(`${newCount} <= ${oldCount}`);
        }
    }

    const fetchCount = () => {
        axios.get(getClickCountUrl)
            .then(result => {
                updateCount(result.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const onClick = () => {
        setClickCount(clickCount + 1)
        axios.post(clickUrl)
            .then((result) => {
                console.log('click submitted');
                setClickCount(result.data);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        console.log('click count changed: ', clickCount);

        const interval = setInterval(() => {
            console.log('in interval: count is ' + clickCount);
            fetchCount();
        }, 2000);

        return () => clearInterval(interval);

    }, [clickCount]);

    useEffect(() => {
    }, [clickCount])

    return (
        <>
            <div>
                <h1 className="h-app">Click the Button</h1>
            </div>
            <div className="d-flex justify-content-center">
                <button id="the-button" onClick={onClick}>Button</button>
            </div>
            <div className="d-flex justify-content-center">
                <p>This button has been clicked {clickCount} times</p>
            </div>
        </>
    );

}

export default ClickButtonApp;