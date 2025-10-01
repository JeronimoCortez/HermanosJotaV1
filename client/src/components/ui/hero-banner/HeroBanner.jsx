import './HeroBanner.css'

const HeroBanner = ({ title, subtitle, paragraph, heroButton}) => {
    return (
        <div className="hero-banner">
            <h1 className="hero-banner-title">{title}</h1>
            <h2 className="hero-banner-subtitle">{subtitle}</h2>
            <p className="hero-banner-paragraph">{paragraph}</p>
            <button className='hero-banner-button' onClick={mostrarPagina}></button>

        </div>
    )
}

export default HeroBanner;