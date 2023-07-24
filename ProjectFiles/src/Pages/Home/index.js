import React from "react"
import {nfr,nnr,nyt} from "../../Utils/GBooks";
import Carousels from "../../Components/Carousels";
import '../../Assets/index.css'


export default function HomePage(){



    const indexes = [0, 1, 7, 10, 14]

    const fiction = []
    const nonfiction = []
    const nyF = []
    const nyNF = []
    const nyC = []
    const nyY = []
    const nyG = []

    const nf_books = nnr.items
    const f_books = nfr.items

    const AllLists = nyt.results.lists
    const Lists = AllLists.filter((_, index) => indexes.includes(index))

    const [nyFiction, nyNonfiction, nyChildren, nyYA, nyManga] = Lists


    nf_books.map((book) =>{
        const {volumeInfo, id} = book
        let {title, imageLinks} = volumeInfo
        if(title.length > 19){
            title = title.slice(0,19) + "..."

        }
        let {thumbnail} = imageLinks
        thumbnail = thumbnail.replace("&edge=curl","")
        const obj = {title: title, cover:thumbnail, id:id, cName: 'sliderStyle'}
        nonfiction.push(obj)

    })
    f_books.map((book) =>{
        const {volumeInfo, id} = book
        let {title, imageLinks} = volumeInfo
        let {thumbnail} = imageLinks
        thumbnail = thumbnail.replace("&edge=curl","")
        if(title.length > 19){
            title = title.slice(0,19) + "..."
        }
        const obj = {title: title, cover:thumbnail, id:id, cName: 'sliderStyle'}
        fiction.push(obj)
    })
    nyFiction.books.map((book) =>{
        let {title, book_image, primary_isbn10} = book
        title = title.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        if(title.length > 19){
            title = title.slice(0,19) + "..."
        }
        const obj = {title: title, cover:book_image, id:primary_isbn10, cName: 'sliderStyle'}
        nyF.push(obj)
    })
    nyNonfiction.books.map((book) =>{
        let {title, book_image, primary_isbn10} = book
        title = title.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        if(title.length > 19){
            title = title.slice(0,19) + "..."
        }
        const obj = {title: title, cover:book_image, id:primary_isbn10, cName: 'sliderStyle'}
        nyNF.push(obj)
    })
    nyChildren.books.map((book) =>{
        let {title, book_image, primary_isbn10} = book
        title = title.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        if(title.length > 19){
            title = title.slice(0,19) + "..."
        }
        const obj = {title: title, cover:book_image, id:primary_isbn10, cName: 'sliderStyle'}
        nyC.push(obj)
    })
    nyYA.books.map((book) =>{
        let {title, book_image, primary_isbn10} = book
        title = title.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        if(title.length > 19){
            title = title.slice(0,19) + "..."
        }
        const obj = {title: title, cover:book_image, id:primary_isbn10, cName: 'sliderStyle'}
        nyY.push(obj)
    })
    nyManga.books.map((book) =>{
        let {title, book_image, primary_isbn10} = book

        title = title.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        if(title.length > 19){
            title = title.slice(0,19) + "..."
        }
        const obj = {title: title, cover:book_image, id:primary_isbn10, cName: 'sliderStyle'}
        nyG.push(obj)
    })




    return(
        <>

            <div className='top'>
                <h2 style={{marginLeft:'10px'}}>New Releases</h2>
                <br/>
                <h3 style={{marginLeft: '10px'}}>Fiction</h3>
                    <Carousels books={fiction}/>
                <h3 style={{marginLeft:'10px'}}>Non-Fiction</h3>
                    <Carousels books={nonfiction}/>
                <br/>
                <h2 style={{marginLeft:'10px'}}>New York Times Bestsellers Lists</h2>
                <br/>
                <h3 style={{marginLeft:'10px'}}>Fiction</h3>
                    <Carousels books={nyF}/>
                <h3 style={{marginLeft:'10px'}}>Nonfiction</h3>
                    <Carousels books={nyNF}/>
                <h3 style={{marginLeft:'10px'}}>Children's</h3>
                    <Carousels books={nyC}/>
                <h3 style={{marginLeft:'10px'}}>Young Adult</h3>
                    <Carousels books={nyY}/>
                <h3 style={{marginLeft:'10px'}}>Graphic Books & Manga</h3>
                    <Carousels books={nyG}/>
            </div>


        </>
    )




}
//<bookDetails book={de