import AlgoGauge from "./AlgoGauge/AlgoGauge.tsx";
import PortfolioSite from "./PortfolioSite/PortfolioSite.tsx";
import WerewolfModerator from "./WerewolfModerator/WerewolfModerator.tsx";
import NexusWars from "./NexusWars/NexusWars.tsx";
import OmniTicTacToe from "./OmniTicTacToe/OmniTicTacToe.tsx";

export interface PortfolioItem {
    name: string;
    title: string;
    image: string;
    summary: string;
    page?: any;
}

export const items = {
    AlgoGauge: AlgoGauge,
    PortfolioSite: PortfolioSite,
    WerewolfModerator: WerewolfModerator,
    NexusWars: NexusWars,
    OmniTicTacToe: OmniTicTacToe
}
