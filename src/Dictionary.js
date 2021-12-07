import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css"


export default function Dictionary(){
let [word, setWord]=useState("")


function handleResponse(response){
    console.log(response.data)
}


    function search(event){
        event.preventDefault()
        alert(`searching for ${word}`)

        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

axios.get(apiUrl).then(handleResponse)
    }

    

    function changeWord(event){
        setWord(event.target.value)
    }

    return ( 
    
    <div>

        <form onSubmit={search}>
            <input type="search" onChange={changeWord} placeholder="Type a word" autoFocus="false" />
        </form>
    </div>
    )
}

//https://api.dictionaryapi.dev/api/v2/entries/en/