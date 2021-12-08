import React from "react";
import Meaning from "./Meaning"
import "./Results.css"
import PhoneticAudio from "./PhoneticAudio"

export default function Results(props){

    

if(props.data){


    return(
        <div className="results">
<h2 className="name"> {props.data.word}</h2> 





{props.data.phonetics.map(function(phonetic,index){


return <div key={index}>

<PhoneticAudio phonetic={props.data.phonetics[0]} />

</div>

})}   

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