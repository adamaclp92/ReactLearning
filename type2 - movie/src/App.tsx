import React, { useState, useEffect, useCallback } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import MovieModel from './models/movieModel';
import AddMovie from './components/AddMovie';



const App = () => {

  const [movies, setMovies] = useState<MovieModel[]>([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
 

  //Itt a useCallback-nak akkor van értelme, ha a metódusban van egy state object, ami változhat, így szükséges a revalutate
//És így a useCallback megőrzi az eredeti metódust
//jelen helyzetben (nincs state a metódusban) useCallback nélkül is megfelelően mködik
  const fetchMovieHandler = useCallback(async () => {
    
    try{

      setIsLoading(true)

      
      //const response = await fetch('https://swapi.dev/api/films')
      const response = await fetch('https://react-http-34ef6-default-rtdb.firebaseio.com/movies.json')

      if(!response.ok){
        throw new Error("Something went wrong")
      }
  
      const data = await response.json()
    
      /*const transFormedData = data.results.map((movieData: {episode_id: number, title: string, opening_crawl: string, release_date: string}) => {
        return {
            id: movieData.episode_id,
            title: movieData.title,
            releaseDate: movieData.release_date,
            openingText: movieData.opening_crawl
        }
      })*/

      let transFormedData: MovieModel[] = [];

      for(const key in data){
        transFormedData.push({
          id: data[key].id,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }


      setMovies(transFormedData)
    }catch(error: any){
      setError(error.message)
    }

    setIsLoading(false)

  }, [])

  const addMovieHandler = async (movie: MovieModel) => {
    const response = await fetch('https://react-http-34ef6-default-rtdb.firebaseio.com/movies.json', {
       method: 'POST',
       body: JSON.stringify(movie),
       headers: {
         'Content-Type': 'application/json'
       }
     })

     const data = await response.json()
     fetchMovieHandler()
   }


  useEffect(() => {
    fetchMovieHandler()
  }, [fetchMovieHandler])

  let content = <p>Found no movies</p>

    if(movies!.length > 0){
      content = <MoviesList movies={movies!} />
    }

    if(error){
      content = error
    }

    if(isLoading){
      content = <p>Loading...</p>
    }


  return (
    <React.Fragment>
    <section>
      <AddMovie onAddMovie={addMovieHandler}/>
    </section>
    <section>
      <button onClick={fetchMovieHandler}>Fetch Movies</button>
    </section>
    <section>
      {content}
    </section>
  </React.Fragment>
  );
}

export default App;
