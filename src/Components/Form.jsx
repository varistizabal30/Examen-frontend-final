import React from "react";
import { useState } from "react";

const Form = () => {
    const [inputName, setName] = useState("")
    const [inputEmail, setEmail] = useState("")
    const [error, setError] = useState(false)
    let isSubmit = false

    function handleSubmit(event){
        event.preventDefault();
        setError(false);
        isSubmit = true
        console.log("inputName: " + inputName);

        if(inputName.length < 5){
          console.log("error")
          setError(true)
        }
        // if(inputName.trim().length > 0 || inputName.trim()[0] === " " || inputName.trim().length <= 5) {
        //     setError(true)
        //     console.log("if", error, isSubmit)
        //     console.log(inputName.length)
        //     return;
        // }
      
    }

    function handleOnChangeName(event){
        setName(event.target.value)
    }

    function handleOnChangeEmail(event){
        setEmail(event.target.value)
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text"  onChange={handleOnChangeName} value={inputName}/>
        <label>Email:</label>
        <input type="email" onChange={handleOnChangeEmail} value={inputEmail}/>
        <button type="submit">Send</button>
       
      </form>
      {error ? <p>Please check your information again</p>: undefined}  
      {(error ===false && isSubmit) ? <p>{`Thank you ${inputName} We will contact you as soon as possible via email`}</p>: undefined}        
    </div>
  );
};

export default Form;