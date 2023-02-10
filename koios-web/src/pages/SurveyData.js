import './../index.css';
import React from 'react';
import {useState} from "react";
export default function SurveyData({selected, setSelected}) {
  const[isActive, setIsActive] = useState(false);
  const options = ['Survey 1', 'Survey 2', 'Survey 3']

  const[first, setFirst] = useState (true);
  const[second, setSecond] = useState (true);
  
  const handleChange=(data)=>{
    if(data=="first")
    {
      if(first==true){
        console.log(data,"our value")
      }
      setFirst(!first)
    }
      if(data=="Second"){
        if(second==true){
          console.log(data, "out value")
        }
      setSecond(!second)
      }
    
  }


    return (
        <div className = "dropdown">
         <div className = "dropdown-button" onClick={(e) => setIsActive(!setIsActive)}>Choose Survey
         <span className ="fa fa-caret-down"></span>
         </div>
         {isActive && ( 
          <div className = "dropdown-content">
           {options.map(option => (
            <div 
            onClick={e => {
              setSelected(option);
              setIsActive(false);
            }}
            className = "dropdown-item">{option}</div>
            ))}
            </div>
         )}
         <input type ="checkbox" value={first} onChange={()=>handleChange("first")}/> Positive 
         <input type ="checkbox" value={first} onChange={()=>handleChange("second")}/> Negative
         </div>
        
       
    );


  
    };
    

    
    
    
    
    

