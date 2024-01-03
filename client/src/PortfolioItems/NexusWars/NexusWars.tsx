import { PortfolioItem } from "../PortfolioItems"
import NexusWarsPage from "./NexusWarsPage"

const NexusWars: PortfolioItem = {
    name: "NexusWars",
    title: "Nexus Wars",
    image: "Portfolio/NexusWars/Thumbnail.png",
    summary: `I am currently developing Nexus Wars, a turn-based strategy game on Roblox.
        I have thus far implemented a robust and expandable code base that allows for rapid
        addition of new content, including maps and playable factions. It also features
        visuals that are processed client-side only, resulting in smooth animations and effects.`,
    page: <NexusWarsPage />
}

export default NexusWars