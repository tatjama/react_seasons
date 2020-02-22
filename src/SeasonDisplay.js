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
            return  'snowflake'
        }
            return    'sun'    
    }
    const text = ()=>{
        if(season() === 'winter'){
            return "Brr, it's cold"
        }
            return "Let's go to the beach!"
    }

    return(        
        <div className = {season()}>
                <i className = {`left massive ${displaySeason()} icon`}></i>
                <div className = "central"><h1>{text()}</h1></div>
                <i className = {`right massive ${displaySeason()} icon`}></i>  
          
        </div>
    );
};

export default SeasonDisplay;