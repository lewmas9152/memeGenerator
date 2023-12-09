import React, { useState } from "react";
import memesData from "./Data";

const Form = (props) => {
  const [meme, setMeme] = useState("");

  const [formData,setFormData] = useState(
    {top:"",bottom:""})

  const handleChange = (event) => {
    setFormData(prevFormData=>{
        return{
            ... prevFormData,
        [event.target.name]:event.target.value}
    })
  };

  console.log(formData);
  const getMemeImg = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme(memesArray[randomNumber].url);
    console.log("clicked");
  };


  return (
    <>
      <form action="#html">
        <input type="text"  onChange={handleChange}  name="top" placeholder="Enter top text "/>
        <input type="text"  onChange={handleChange} name="bottom" placeholder="Enter bottom text "/>
        <input
          type="button"
          value="Get a new meme image"
          className="submit"
          onClick={getMemeImg}
        />
      </form>
      <div className="imgSection">
        <h2 className="top">{formData.top} </h2>
        <img src={meme} alt="meme-img" className="memeImg" />

        <h2 className="bottom">{formData.bottom}</h2>
      </div>
    </>
  );
};

export default Form;
