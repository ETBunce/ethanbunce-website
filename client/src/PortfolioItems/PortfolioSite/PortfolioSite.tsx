import { PortfolioItem } from "../PortfolioItems"
import PortfolioSitePage from "./PortfolioSitePage"

const PortfolioSite: PortfolioItem = {
    name: "PortfolioSite",
    title: "My Portfolio Site",
    image: "Portfolio/PortfolioSite/PortfolioPage.png",
    summary: `Using a MERN stack, I built this very site you are viewing. This site hosts my portfolio and serves as a platform on which I can develop apps in the future.`,
    page: <PortfolioSitePage />
}

export default PortfolioSite