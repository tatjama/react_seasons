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
            return (
                <div className = "displaySeason winter">
                    <i className = "left massive snowflake icon"></i>
                    <div className = "central"><h1>Brr, it's cold</h1></div>
                    <i className = "right massive snowflake icon"></i>
                </div>
            )
        }
        return (
            <div className = "displaySeason summer">
                <i className = "left massive sun icon"></i>
                <div className = "central"><h1>Let's go to the beach</h1></div>
                <i className = "right massive sun icon"></i>
            </div>
        )    
    }

    return(        
        <div>         
            {displaySeason()}
        </div>
    );
};

export default SeasonDisplay;