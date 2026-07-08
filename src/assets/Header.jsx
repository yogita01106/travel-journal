import globe from "./globe.png";
export default function Header() {
    return (
        <header>
            <img src={globe} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}