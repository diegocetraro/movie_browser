import React from "react";
import Hero from '../Hero/Hero'
import imageNotFound from '../images/img2.rtve.es.jpg'
import { Link } from 'react-router-dom'
class NotFound extends React.Component{

    render(){
        return(
            <div>
                <Hero text="Error 404..... Page not found...."/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <img className="img-fluid my-5 rounded" src={imageNotFound} alt='ImageNotFound'/>
                        </div>
                        <div className="col-md-6 col-12 my-5 text-center">
                            <h1 className="fs-2">Oops!? The page you are searching for doesn't exists...</h1>
                            <Link to='/'className="btn btn-outline-primary my-5">Go back to home page.</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;