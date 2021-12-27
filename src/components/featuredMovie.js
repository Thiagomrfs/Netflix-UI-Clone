import react from "react"
import "./featuredMovie.css"

export default function FeaturedMovie({ item }) {
    let launchDate = new Date(item.first_air_date)
    let genres = []
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    let description = item.overview
    if (description.length > 250) {
        description = description.substring(0, 250) + "..."
    }

    return (
        <section className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="fade--vertical">
                <div className="fade--horizontal">
                    <div className="featured--name">{item.name}</div>
                    <div className="featured--metadata">
                        <div className="points">{item.vote_average} pontos</div>
                        <div className="year">{`${launchDate.getFullYear()}`}</div>
                        <div className="seasons">{item.number_of_seasons} temporada{item.number_of_seasons != 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">
                        {description}
                    </div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="button--watch">Assistir</a>
                        <a href={`/list/add/${item.id}`} className="button--mylist">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres">
                        <strong>Gêneros: </strong> {genres.join(", ")}
                    </div>
                </div>
            </div>
        </section>
    )
}