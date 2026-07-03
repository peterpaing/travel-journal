import globeImg from "../assets/globe.png"

export default function Header() {
    return (
        <header>
            <img src={globeImg}/>
            <h1>my travel journal.</h1>
        </header>
    )
}
