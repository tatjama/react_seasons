import React from 'react';

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
                <div>
                    <i className = "left snowflake icon"></i>
                    <div className = "central">"Brr, it's cold"</div>
                    <i className = "right snowflake icon"></i>
                </div>
            )
        }
        return (
            <div>
                <i className = "left sun icon"></i>
                <div className = "central">"Let's go to the beach"</div>
                <i className = "right sun icon"></i>
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