const API_KEY = "186c34a010857a1588288868a1ee3052";
const API_BASE = "https://api.themoviedb.org/3";

async function basicFetch(endpoint, reqArgs = null) {
    const args = reqArgs ? `&${reqArgs}` : ''
    const req = await fetch(`${API_BASE}${endpoint}?api_key=${API_KEY}${args}&language=pt-BR`);
    const json = await req.json();
    return json;
}

async function getHomeList() {
    return [
        {
            slug: 'originals',
            title: 'Originais da Netflix',
            items: await basicFetch('/discover/tv', 'with_network=213')
        },
        {
            slug: 'trending',
            title: 'Recomendados para você',
            items: await basicFetch('/trending/all/week')
        },
        {
            slug: 'top rated',
            title: 'Em alta',
            items: await basicFetch('/movie/top_rated')
        },
        {
            slug: 'action',
            title: 'Filmes de ação',
            items: await basicFetch('/discover/movie', 'with_genres=28')
        },
        {
            slug: 'comedy',
            title: 'Filmes de comédia',
            items: await basicFetch('/discover/movie', 'with_genres=35')
        },
        {
            slug: 'horror',
            title: 'Filmes de horror',
            items: await basicFetch('/discover/movie', 'with_genres=27')
        },
        {
            slug: 'romance',
            title: 'Filmes de romance',
            items: await basicFetch('/discover/movie', 'with_genres=10749')
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            items: await basicFetch('/discover/movie', 'with_genres=99')
        },
    ]
}

async function getItemInfo(id, type) {
    let info = {}

    info = await basicFetch(`/${type}/${id}`)

    return info
}

export default {
    basicFetch,
    getHomeList,
    getItemInfo
}