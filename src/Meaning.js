import React from "react";
import "./Meaning.css"
import Synonyms from "./Synonyms";


export default function Meaning(props){

console.log(props.meaning)

    return (
        <div className="meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index){



            return(
                <div  key={index}>

                    <p className="definition">
                    {definition.definition}</p>
                    <p className="example">{definition.example}.</p>
<Synonyms synonyms={definition.synonyms}/>
                </div>
            )
        })}
      
        </div>
    )

}