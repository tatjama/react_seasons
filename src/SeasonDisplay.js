import React from 'react';

//function return number 0=januar, 1=februar...11=decembar
const month = new Date().getMonth();
console.log(month);

const SeasonDisplay = ( props) =>{
    console.log(props.lat);

   const season =()=>{
    return 'season'
   }
    
    console.log(season());
    return(
        
        <div>
            {props.season}
        </div>
    );
};

export default SeasonDisplay;