import React from "react";
//import {useEffect, useState} from "react";
import {useSpringCarousel} from "react-spring-carousel";
import  "../Assets/index.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image"



const items = 5


function Carousels(props){


    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        itemsPerSlide: props.books.length,
        withLoop: true,
        items: props.books.map((book) => ({
            id: book.id,
            renderItem: (
                <Card className= {book.cName} >
                    <Card.Body>
                        <Image src={book.cover} fluid rounded/>
                        <Card.Text style={{fontFamily:'Libre', marginTop: '3px'}}>{book.title}</Card.Text>
                    </Card.Body>
                </Card>
            ),
        })),
    });


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


