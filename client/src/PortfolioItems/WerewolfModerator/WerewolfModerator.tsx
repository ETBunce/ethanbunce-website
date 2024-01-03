import { PortfolioItem } from "../PortfolioItems";
import WerewolfModeratorPage from "./WerewolfModeratorPage";

const WerewolfModerator: PortfolioItem = {
    name: "WerewolfModerator",
    title: "Werewolf Moderator Utility",
    image: "Portfolio/WerewolfModerator/WerewolfIcon.png",
    summary: `Werewolf Moderator Utility is an Android app I published on the Google Play store.
        It provides a lot of useful functionality for moderating the Ultimate Werewolf party game,
        such as keeping a list of players and guiding the moderator on what needs to be done each round.
        This app has earned a 4.8 star rating with over 1000 downloads, and was developed using GameMaker Studio.`,
    page: <WerewolfModeratorPage />
}

export default WerewolfModerator