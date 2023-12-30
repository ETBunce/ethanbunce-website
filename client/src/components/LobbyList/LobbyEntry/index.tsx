import './index.css'

const LobbyEntry = ({
    lobby
}) => {
    return (
        <>
            <button className="card lobby-entry">
                <div className="card-body">
                    <p className="card-text lobby-entry-text">{lobby.title}</p>
                </div>
            </button>
        </>
    )
}

export default LobbyEntry;