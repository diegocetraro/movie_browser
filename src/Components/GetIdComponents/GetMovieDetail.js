import MovieView from '../MovieComponent/MovieView'
import Hero from '../Hero/Hero'
import { useEffect, useState} from 'react'

const GetMovieDetail = ( id ) =>{

    const [movieDetail, setMovieDetail] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () =>{
        fetch(`https://api.themoviedb.org/3/movie/${id.id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setTimeout( () =>{
                setMovieDetail(data)
                setIsLoading(false)
            }, 1000)
        })
    }, [id.id])
    
    function renderMovieDetail(){
        if(isLoading){
            return <Hero text="Loading..." />
        }
        if(movieDetail){
            return <MovieView movieDetail={movieDetail} /> 
        }
    }
    
    return (
       renderMovieDetail()
    )
}



export default GetMovieDetail