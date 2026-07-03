import marker from "../assets/marker.png"

export default function Cards(props){
    return (
            <section className="card">
                <img src={props.img.src} alt="{props.img.alt}"/>
                <div className="about-card">
                <img src={marker} alt="marker logo"/>
                <span>{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h2>{props.title}</h2>
                <p className="date">{props.dates}</p>
                <p>{props.text}</p>
                </div>
            </section>
    )
}