//import {useEffect} from "react";
const nytKey = "tacGMs0qbC4OcJvyP4VFgN3qtQYAiJnT"

 const getNewFictionReleases = async() =>{
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&maxResults=10`
    )
    return await response.json()
}

 const getNewNonFicReleases = async() =>{
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:Nonfiction&orderBy=newest&maxResults=10`
    )
    return await response.json()
}

export const getNYTBest = async() =>{
    const response = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${nytKey}`
    )
    return await response.json()
}


export const nfr = await getNewFictionReleases()
export const nnr = await getNewNonFicReleases()
export const nyt = await getNYTBest()



