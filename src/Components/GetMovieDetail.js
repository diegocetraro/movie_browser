import MovieView from './MovieView'
import { useEffect, useState} from 'react'

const GetMovieDetail = ( id ) =>{

    const [movieDetail, setMovieDetail] = useState({})
    
    useEffect( () =>{
        fetch(`https://api.themoviedb.org/3/movie/${id.id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setMovieDetail(data)
        })
    }, [id.id])
    
    return (
        <div>
           <MovieView movieDetail={movieDetail}/> 
        </div>
    )
}



export default GetMovieDetail