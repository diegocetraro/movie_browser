import GetSearchDetails from './GetSearchDetails'
import { useParams } from "react-router";

const GetSearchedText = () =>{
    const { id } = useParams()

    return (
        <div>
           <GetSearchDetails id={id} />
        </div>
    )
}

export default GetSearchedText;