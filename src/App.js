import React, { useEffect, useState } from "react";
import './App.css'
import moviesDb from "./moviesDb.js"
import MovieRow from "./components/MovieRow.js";
import FeaturedMovie from "./components/featuredMovie.js";
import Header from "./components/header";

export default () => {
  const [movies, setMovies] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);


  useEffect(() => {
    const loadAll = async () => {
      let list = await moviesDb.getHomeList();
      setMovies(list);

      let originals = list.filter(i => i.slug === 'originals');
      let random = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[random];
      let chosenInfo = await moviesDb.getItemInfo(chosen.id, 'tv');

      setFeatured(chosenInfo)
    }

    loadAll();
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener("scroll", scrollListener)

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featured && <FeaturedMovie item={featured} />}

      <section className="lists">
        {
          movies.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))
        }
      </section>

      <footer>
        Feito por Thiago Marinho<br />
        Direitos de imagem para Netflix<br />
        Dados adquiridos no site themoviedb.org
      </footer>


      {movies.length == 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando"></img>
        </div>
      }
    </div>
  )
}