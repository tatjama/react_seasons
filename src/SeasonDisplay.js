import React from 'react';

//function return number 0=januar, 1=februar...11=decembar
const month = new Date().getMonth();
console.log(month);

const SeasonDisplay = ( props) =>{
    console.log(props.lat);
/* Arrow function season . Give us season depending of two parameters lat and month*/
   const season =()=>{
    return 'season'
   }
    
    console.log(season());
    return(
        
        <div>
            Season display:
            {season()}
        </div>
    );
};

export default SeasonDisplay;