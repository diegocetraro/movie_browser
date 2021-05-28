import React from "react";
import Hero from '../Hero/Hero'
import me from '../images/me.jpg'
class AboutView extends React.Component{
    render(){
        return(
            <div>
                 <Hero text="About Me"/>
                 <div className="container">
                    <div className="row">
                        <div className="col-lg-4 my-4">
                            <img className="img-fluid rounded"src={me} alt='me'/>
                        </div>
                        <div className="col-lg-8 my-4">
                            <h1 className="fs-1 fw-bold mb-3">Name: Juan Diego Aranda Cetraro</h1>
                            <h4 className="mb-3">Hometown: Lima, Perú</h4>
                            <h4 className="mb-3">Career: System Engineering</h4>
                            <h4 className="mb-3">Specialized in and interests: Project Management, Fullstack Web Development, Digital Transformation </h4>
                            <h4 className="mb-3">Hobbies: Technology, Video Games, Movies, Spend Time with friends and family</h4>
                            <p className="lead mb-3">              
                                Professional with a degree in System Engineer from the University of Lima. I have experience in Project Management oriented to Information and Technology, software integration, application development and deployment. Also with experience in the areas of System Architecture, Networking and infrastructure, Investigation and Development. Proactive and willing to execute and fulfill with the functions assigned to me, high capacity for problem solving, developed soft skills, commitment, perseverance and team work.  Currently my main interest are the areas of IT Project Management, Integration; Development and Deployment of applications and web services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutView;