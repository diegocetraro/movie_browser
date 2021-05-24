import ShowSearchDetail from './ShowSearchDetail'
import Hero from '../Hero/Hero'
import { useEffect, useState} from 'react'

const GetSearchDetails = ( id ) =>{

    const [searchDetail, setSearchDetail] = useState([])
    const [no_result_text, set_no_result_text] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () =>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=d51758b8c051a653109be4d8e92fcdce&language=en-US&query=${id.id}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
            if(data.results.length === 0){
                setTimeout( () =>{
                    set_no_result_text(`No results were found for ${id.id}`)
                    setSearchDetail([])
                }, 1000)
            }
            if(data.results.length !== 0){
                setTimeout( () =>{
                    setSearchDetail(data.results)
                    setIsLoading(false)
                }, 1000)
            }
            
        })
    }, [id.id])
    
    function renderMovieDetail(){
        if(isLoading){
            return <Hero text="Loading..." />
        }
        if(searchDetail){
            return <ShowSearchDetail searchDetail={searchDetail} searchText={id.id} no_result_text={no_result_text}/>
        }
    }
    
    return (
       renderMovieDetail()
    )
}



export default GetSearchDetails