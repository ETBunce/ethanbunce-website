import { PortfolioItem } from "../PortfolioItems"
import AlgoGaugePage from "./AlgoGaugePage"

const AlgoGauge: PortfolioItem = {
    name: "AlgoGauge",
    title: "AlgoGauge",
    image: "Portfolio/AlgoGauge/AlgoGaugeHome.png",
    summary: `A web app I built with a team for our university capstone project.
    AlgoGauge allows the user to enter input parameters for different sorting algorithms
    and compare the performance results. Built using a MERN stack.`,
    page: <AlgoGaugePage />
}

export default AlgoGauge