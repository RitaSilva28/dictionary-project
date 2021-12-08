import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css"
import Results from "./Results"


export default function Dictionary(){
let [word, setWord]=useState("");
let [data, setData]=useState(null)
let [message, setMessage]=useState(false)


function handleResponse(response){
setData(response.data[0])
setMessage(false)
console.log(response.data[0])

}


    function search(event){
        event.preventDefault()


        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

       axios.get(apiUrl).then(handleResponse).catch(function (error) {
        if (error.response) {
          setMessage(true)
        }else{
        setMessage(false)
        }
      });

       console.log(apiUrl)
    }

    

    function changeWord(event){
        setWord(event.target.value)

    }

console.log(message)
    
    return ( 
    
    <div>

        <form onSubmit={search}>
            <input type="search" onChange={changeWord} placeholder="Type a word" autoFocus={false} />
        </form>
         {message===true ? <h1 className="results-message">Sorry we found no results 😔 <br/> <small>Please search for another word</small> </h1> : <Results data={data} message={message}/> }
    </div>
    )
}

//https://api.dictionaryapi.dev/api/v2/entries/en/