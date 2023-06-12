import React from "react";
//import {useEffect, useState} from "react";
import {useSpringCarousel} from "react-spring-carousel";
import  "../Assets/index.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image"



const words = ["hello", "goodbye", "adios", "no", "jesus", "any", "person"]
const items = 5


function Carousels(){



    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        itemsPerSlide: items,
        withLoop: true,
        items: words.map((i) => ({
            id: i,
            renderItem: (
                <Card className='sliderStyle'>
                    <Card.Body>
                        <Image src='https://miblart.com/wp-content/uploads/2020/01/crime-and-mystery-cover-scaled-1-683x1024.jpeg' fluid rounded/>
                        <Card.Text>Fortress of Blood (Book Two of...</Card.Text>
                    </Card.Body>
                </Card>
            ),
        })),
    });

//https://miblart.com/wp-content/uploads/2020/01/crime-and-mystery-cover-scaled-1-683x1024.jpeg
//<Carousels items={}/>
    //Also remove classNames top from <Container>
    // className

    return(
        <>
            <Container fluid='md' as='div' className='carousel-container'>
                <FontAwesomeIcon size='xl' className="left-arrow m-arrows" icon={faChevronLeft} onClick={slideToPrevItem}/>
                <FontAwesomeIcon size='xl' className="right-arrow m-arrows" icon={faChevronRight} onClick={slideToNextItem}/>

                <Container as='div' fluid="md" className=' sliderContainer'>
                        {carouselFragment}
                </Container>
            </Container>
        </>
    )
}
export default Carousels


