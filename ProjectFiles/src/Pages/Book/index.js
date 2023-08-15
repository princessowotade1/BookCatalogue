import React  from 'react'
//import {getBook} from "../../Utils/GBooks";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {faAmazon} from "@fortawesome/free-solid-svg-icons"
import {useQuery} from "react-query";
import Carousels from "../../Components/Carousels";
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"



export default function BookDetails(props){
    const bookTitle = props.title
    const author = props.author
    const relatedBooks = []

    const FetchData = () =>{
        return useQuery('data', async() =>{
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}+inauthor:${author}`)
            return await response.json()
        })
    }

    const {data, isLoading} = FetchData()

    if (isLoading){
        return <div>Loading...</div>
    }
    //const test = ['Suzanne Collins']
    const bookDetails = data.items[0].volumeInfo
    const Books = data.items.slice(1, data.items.length-1)
    let {id} = data.items[0]
    let {title,authors,imageLinks,description, publishedDate, averageRating} = bookDetails
    let Largethumbnail = `https://books.google.com/books/publisher/content/images/frontcover/${id}?fife=w480-h690`

    Books.map((book) =>{
        const {volumeInfo, id} = book
        let {title, language, imageLinks, authors} = volumeInfo
        if(!(volumeInfo.hasOwnProperty('imageLinks')) || !(volumeInfo.hasOwnProperty('title')) || !(volumeInfo.hasOwnProperty('language')) || !(volumeInfo.hasOwnProperty('authors'))){
            return null
        }
        let check = author
        check = check.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        if(!(authors.includes(check))){
            return null
        }

        if(language !== 'en'){
            return null
        }
        let {thumbnail} = imageLinks
        thumbnail = thumbnail.replace("&edge=curl","")
        if(title.length > 19){
            title = title.slice(0,19) + '...'
        }
        const obj = {title: title, cover:thumbnail , id:id, cName:'AuthorSlider'}
        relatedBooks.push(obj)
    })








    return(
       <>
        <Container className='bookInfo-Container' as='div' fluid='md'>
            <Row>
                <Col>
                    <Image className='bookCover' src={Largethumbnail}/>

                </Col>

                <Col md={9}>
                    <Container className='bookDetails' as='div' fluid>
                        <Row>
                            <Col><h2>{title}</h2></Col>
                        </Row>
                        <Row>
                            <Col>{authors[0]}</Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col className='Descript' xs={10}>{description}</Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <br/>
            <br/>
            <h5>Other Books By {authors[0]}</h5>
            <Carousels books={relatedBooks}/>
        </Container>
       </>
   )


}


