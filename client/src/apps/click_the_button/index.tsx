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
        if (newCount > clickCount) {
            setClickCount(newCount);
        }
    }

    const onClick = () => {
        setClickCount(clickCount + 1)
        axios.post(clickUrl)
            .then(result => {
                updateCount(result.data);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get(getClickCountUrl)
                .then(result => {
                    updateCount(result.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

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