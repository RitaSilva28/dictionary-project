import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css"
import Results from "./Results"
import Photos from "./Photos";


export default function Dictionary(){
let [word, setWord]=useState("");
let [data, setData]=useState(null)
let [message, setMessage]=useState(false)
let [photos, setPhotos]=useState(null)


function handleResponse(response){
setData(response.data[0])
setMessage(false)

}

function handlePexelsResponse(response){
    setPhotos(response.data.photos)
    console.log(response.data)
}


    function search(event){
        event.preventDefault()


        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        let pexelsUrl=`https://api.pexels.com/v1/search?query=${word}&per_page=6`;
        let pexelsApiKey="563492ad6f917000010000010466bd6e315044fea0e7d6c2b520f0af";

        
        axios.get(pexelsUrl, {headers: { Authorization: `Bearer ${pexelsApiKey}`},}).then(handlePexelsResponse)


       axios.get(apiUrl).then(handleResponse).catch(function (error) {
        if (error.response) {

            setMessage(true)
          

        }else {

            
        setMessage(false)

        }

      });

      


    }

    console.log(photos)


    function changeWord(event){
        setWord(event.target.value)

    }

    
    return ( 
    
    <div>

        <form onSubmit={search}>
            <input type="search" onChange={changeWord} placeholder="Type a word" autoFocus={false} />
        </form>
         {message===true ? <h1 className="results-message">Sorry we found no results 😔 <br/> <small>Please search for another word</small> </h1> : <Results data={data} message={message}/>}

         {message? null: <Photos photos={photos}/> }
    </div>
    )
}

//https://api.dictionaryapi.dev/api/v2/entries/en/