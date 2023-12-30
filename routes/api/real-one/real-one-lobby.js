import express from 'express';

const lobbyRouter = express.Router();

lobbyRouter.post('/joinLobby', (req, res) => {
    res.json({
        lobbyId: '1',
        lobby: {
            players: ['Example Player 1', 'Example Player 2']
        }
    });
});

lobbyRouter.post('/leaveLobby', (req, res) => {
    res.send();
});

lobbyRouter.get('/lobbies', (req, res) => {
    res.json([
            {id: '1', title: 'Example player', playerCount: 3},
            {id: '2', title: 'Example player2', playerCount: 4}
        ]);
});

lobbyRouter.get('/lobby', (req, res) => {
    res.json({
        players: ['Example Player 1', 'Example Player 2']
    });
});


export default lobbyRouter;