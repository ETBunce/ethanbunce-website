import { useEffect, useState } from "react";
import LobbyEntry from "./LobbyEntry";
import './index.css'
import axios from "axios";
import { Lobby } from "./types";

const LobbyList = ({
    listUrl
}) => {

    const [lobbies, setLobbies] = useState([]);

    function fetchLobbies() {
        axios.get(listUrl)
            .then(result => {
                setLobbies(result.data);
            }).catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {

        fetchLobbies();
        const lobbyInterval = setInterval(() => { fetchLobbies(); }, 1000);
        return () => { clearInterval(lobbyInterval); }

    }, [lobbies]);

    const entryList = lobbies.map((lobby: Lobby) => <li key={lobby.id} className="li-lobby-entry"><LobbyEntry lobby={lobby} /></li>);

    return (
        <>
            <ul className="ul-lobby-list">
                {entryList}
            </ul>

        </>
    )
}

export default LobbyList;