import React from "react";
import Meaning from "./Meaning"
import "./Results.css"
import PhoneticAudio from "./PhoneticAudio"

export default function Results(props){

    

if(props.data){


    return(
        <div className="results">
<h2 className="name"> {props.data.word}</h2> 

<PhoneticAudio phonetic={props.data.phonetics[0]} />

  

{props.data.meanings.map(function(meaning,index){
return <div key={index}>
    <Meaning meaning={meaning}/>
    </div>
})}     
  </div>
    )

}else{

        return null
  
    
    
}

   
}