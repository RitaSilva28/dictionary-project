import React from "react";
import "./Meaning.css"
import Synonyms from "./Synonyms";


export default function Meaning(props){

console.log(props.meaning)

    return (
        <div className="meaning">
        <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index){



            return(
                <div  key={index}>

                    <p className="definition"> Definition: {definition.definition}</p>
                    <p className="example">Example: {definition.example}</p>
<Synonyms synonyms={definition.synonyms}/>
                </div>
            )
        })}
      
        </div>
    )

}