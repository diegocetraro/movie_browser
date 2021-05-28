import React from "react";
import Hero from '../Hero/Hero'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation, Pagination, Autoplay, Thumbs } from 'swiper'


SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay])
class Home extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            thumbsSwiper: null
        }
    }
    render(){
        const slides = []
        const thumbs = []
        if(this.props.popular.length !== 0){
            /*resultsHTML = this.props.popular.map( (obj,i) =>{
                return <Swiper key={i} popular={obj} />
            })*/
           this.props.popular.map( (obj,i) =>{
                slides.push(
                    <SwiperSlide key={`slide-${i}`}>
                        <div className="row">
                            <div className= "col-md-4 my-4">
                                <img className="img-fluid rounded"src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`} style={{listStyle: 'none'}}
                                alt={obj.title} 
                                />
                            </div>
                            <div className="col-md-8 my-4">
                                <h1 className="fs-3">{obj.title}</h1>
                                <span className="lead">Rating: {obj.vote_average}</span>
                                <p className="lead">
                                    {obj.overview}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                )
                thumbs.push(
                    <SwiperSlide key={`thumb-${i}`}>
                        <img className="img-fluid my-2 rounded" src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`} alt={obj.title} style={{maxHeight: '200px'}}/>
                    </SwiperSlide>
                )
            })
        }
        
        return (
            <div>
                <Hero text="Hello from React 201!"/>
                <div className="container">
                    <h1 className="fs-1 fw-bold my-2">See our most popular movies!</h1>
                    <React.Fragment>
                        <Swiper
                            id='main'
                            thumbs={{ swiper: this.state.thumbsSwiper}}
                            tag='section'
                            loop='true'
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            wrapperTag='div'
                            spaceBetween={1}
                            slidesPerView={1}
                        >
                            {slides}
                        </Swiper>
                        <Swiper
                            id="thumbs"
                            spaceBetween={5}
                            slidesPerView={10}
                            onSwiper={this.state.setThumbsSwiper}
                        >
                            {thumbs}
                        </Swiper>
                    </React.Fragment>
                </div>
            </div>
        )
    }
}

export default Home;