import React from "react";
import "./Photos.css"

export default function Photos(props){
console.log(props.photos)

    if(props.photos){

    
    return(
       <div className="photos">
           <div className="row">
           {props.photos.map(function(photo,index){

               return(
                   <div className="col-4">
                       <a href={photo.src.original} target="_blank">
                   <img  className="img-fluid photo" src={photo.src.landscape} key={index}/>
                   </a>
                   </div>
               )

           })}
           </div>
       </div>
    )
    }else{
        return null
    }

}