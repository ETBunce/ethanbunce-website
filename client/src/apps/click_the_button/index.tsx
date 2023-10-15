import { useEffect, useState } from 'react';
import './index.css'
import axios from 'axios';

const getClickCountUrl = 'www./ethanbunce.com/api/click-the-button/count'
const clickUrl = 'www./ethanbunce.com/api/click-the-button/click'

// const getClickCountUrl = 'http://localhost:5000/api/click-the-button/count'
// const clickUrl = 'http://localhost:5000/api/click-the-button/click'

const ClickButtonApp = () => {

    const [clickCount, setClickCount] = useState(0);

    const onClick = () => {
        setClickCount(clickCount + 1)
        axios.post(clickUrl)
            .then(result => {
                console.log(result);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get(getClickCountUrl)
                .then(result => {
                    console.log(result);
                    setClickCount(result.data)
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