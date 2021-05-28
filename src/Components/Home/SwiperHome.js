
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation, Pagination, Controller, Thumbs } from 'swiper'
import { Link } from 'react-router-dom'

SwiperCore.use([Navigation, Pagination])
class SwiperHome extends React.Component{


    render(){
        
        //let posterPath = `https://image.tmdb.org/t/p/w500/${this.props.popular.poster_path}`
        /*return(ss
            <div className="swiper-slide overflow-hidden">
            <div className="row">
                <div className="col-12 p-0">
                    <Link to="/">
                        <img src={posterPath} className="img-fluid swiper-image-transform" alt="...." />
                    </Link>
                </div>
            </div>
        </div>
        )*/
        /*const slides = []
        for (let i = 0; i < 5; i++){
            slides.push(
                <SwiperSlide key={`slide-${i}`} tag='li'>
                    <img src={`https://picsum.photos/id/${i + 1 }/500/300`} style={{listStyle: 'none'}}
                    alt={`Slide ${i}`} 
                    />
                </SwiperSlide>
            )
        }

        return(
            <React.Fragment>
                <Swiper
                    id='main'
                    tag='section'
                    wrapperTag='ul'
                    navigation
                    pagination
                    spaceBetween={0}
                    slidesPerView={1}
                    onInit={(swiper) => console.log('Swiper initialized!', swiper)}
                    onSlideChange={(swiper) => {console.log('Slide index changed to: ', swiper.activeIndex)}}
                    onReachEnd={ () => console.log('Swiper end reached')}
                >
                    {slides}
                </Swiper>
            </React.Fragment>
        )*/

    }
}

export default SwiperHome;

