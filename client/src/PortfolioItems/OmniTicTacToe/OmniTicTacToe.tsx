import { PortfolioItem } from "../PortfolioItems";
import OmniTicTacToePage from "./OmniTicTacToePage";

const OmniTicTacToe: PortfolioItem = {
    name: 'OmniTicTacToe',
    title: 'Omnidimensional Tic-Tac-Toe',
    image: 'Portfolio/OmniTicTacToe/Thumbnail.png',
    summary: `An omnidimensional Tic-Tac-Toe game I made on roblox.
        Players can choose a grid size and theoretically any number of dimensions to play.`,
    page: <OmniTicTacToePage />

};

export default OmniTicTacToe;