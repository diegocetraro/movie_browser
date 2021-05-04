import GetMovieDetail from './GetMovieDetail'
import { useParams } from "react-router";

const GetId = () =>{
    const { id } = useParams()
    console.log(id)

    return (
        <div>
            <GetMovieDetail  id={id}/>
        </div>
    )
}

export default GetId;