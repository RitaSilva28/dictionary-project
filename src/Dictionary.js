import React, {useState} from "react";
import "./Dictionary.css"
export default function Dictionary(){
let [word, setWord]=useState("")

    function search(event){
        event.preventDefault()
        alert(`searching for ${word}`)
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