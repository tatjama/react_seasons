import React from 'react';
import './SeasonDisplay.css';

//function return number 0=januar, 1=februar...11=decembar
const month = new Date().getMonth();
console.log(month);

const SeasonDisplay = ( props) =>{
    console.log(props.lat);
/* Arrow function season . Give us season depending of two parameters lat and month*/
   const season =()=>{
   if(month>2 && month<9){      
       return props.lat>0? 'summer':'winter'   
    }     
        return props.lat>0? 'winter':'summer'      
    } 
    const displaySeason = ()=>{
        if(season() ==='winter'){
            return ({icon: 'snowflake', text: "Brr, it's cold"}) 
        }
            return  ({icon: 'sun', text: "Let's go to the beach"})     
    }
    

    return(        
        <div className = {season()}>
                <i className = {`left massive ${displaySeason().icon} icon`}></i>
                <div className = "central"><h1>{displaySeason().text}</h1></div>
                <i className = {`right massive ${displaySeason().icon} icon`}></i>  
          
        </div>
    );
};

export default SeasonDisplay;