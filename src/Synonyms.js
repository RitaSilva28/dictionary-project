import React from "react";

import "./Synonyms.css"

export default function Synonyms(props){


    if(props.synonyms.length>0){
        return(
<div>

            <h4 className="synonyms-title">synonyms</h4>

        
        <div className="synonyms">

            
            {props.synonyms.map(function(synonym,index){

            return(
                <p key={index} className="synonym-item">{synonym}</p>
            )

        })}
        </div>

        </div>
        )


    }else{
        return null

    }

} 

