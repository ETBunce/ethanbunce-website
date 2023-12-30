// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useEffect } from 'react';
import LobbyList from '../../components/LobbyList';
import './index.css'
import { io } from 'socket.io-client';

const apiUrl = import.meta.env.VITE_API_URL;

const RealOneApp = () => {

    useEffect(() => {
        const socket = io();
        console.log('socket created: ', socket);
    }, [])

    return (
        <>
            <div>
                <h1 className="h-app">Real One</h1>
                <h2 className="h-app">Lobbies</h2>
                <div className='d-flex justify-content-center'>
                    <div id='lobby-list-container'>
                        <LobbyList listUrl={apiUrl + 'real-one/lobbies'} />
                        <div className='d-flex justify-content-center'>
                            <button id='create-lobby-button'>Create Lobby</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default RealOneApp;