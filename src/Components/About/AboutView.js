import React from "react";
import Hero from '../Hero/Hero'
class AboutView extends React.Component{
    render(){
        return(
            <div>
                 <Hero text="About Us"/>
                 <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 my-4">
                            <p className="lead">              
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ducimus ex fugiat accusantium nostrum dolore labore odio perspiciatis suscipit quae obcaecati, aliquid mollitia reiciendis nesciunt deleniti porro eum praesentium ea?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutView;