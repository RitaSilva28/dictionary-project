import React from "react";

export default function PhoneticAudio(props){
console.log(props)
   let audio = "https:"+props.phonetic.audio

    function playMusic(){

        var music = new Audio(audio);
        music.play();
        }

        return(
            <div>
            <h2 className="phonetic"> {props.phonetic.text}</h2> 
            <button className="audio-button" onClick={playMusic} >Listen 🔈</button>
            </div>
        )

}