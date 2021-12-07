import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css"
import Results from "./Results"


export default function Dictionary(){
let [word, setWord]=useState("");
let [data, setData]=useState(null)


function handleResponse(response){
setData(response.data[0])
}


    function search(event){
        event.preventDefault()

        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

axios.get(apiUrl).then(handleResponse)
    }

    

    function changeWord(event){
        setWord(event.target.value)
    }

    return ( 
    
    <div>

        <form onSubmit={search}>
            <input type="search" onChange={changeWord} placeholder="Type a word" autoFocus={false} />
        </form>
        <Results data={data}/>
    </div>
    )
}

//https://api.dictionaryapi.dev/api/v2/entries/en/