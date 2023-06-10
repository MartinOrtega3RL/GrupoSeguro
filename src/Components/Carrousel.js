import "../Assets/css/Carrousel.css";
import React, { useState, useRef } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";





export default function Carrousel(){

    const breakPoints = [{ width: 1, itemsToShow: 1 }];
    const img1 =
    "https://www.iapserseguros.com.ar/wp-content/uploads/2021/04/automotorestabla.png";
    const img2 =
        "https://www.latinspots.com/files/notas/Gnota_57602.jpg";
    const img3 =
        "https://cloudfront-us-east-1.images.arcpublishing.com/semana/2B6LXOSMMFHNBOM6RH7GGBXQV4.jpg";
    const [items] = useState([img1, img2, img3]);
    
    const carouselRef = useRef(null);
    let resetTimeout;
    return(
        <>
        
        <div className="App">
            <div className="title">
                Novedades
            </div>

            <div className="carousel-wrapper">
                <Carousel
                breakPoints={breakPoints}
                enableAutoPlay
                ref={carouselRef}
                pagination={true}
                showArrows={false}
                autoPlaySpeed={4000}
                isRTL={false}
                onNextEnd={({ index }) => {
                    clearTimeout(resetTimeout);
                    resetTimeout = setTimeout(() => {
                    carouselRef?.current?.goTo(0);
                    }, 4000); // same time
                }}
                >
                {items.map((item) => (
                    <Item key={item}>{<img src={item} alt="..." />}</Item>
                ))}
                </Carousel>
            </div>
        </div>




        </>
    );
}