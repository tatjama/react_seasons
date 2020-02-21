import React from 'react';

//function return number 0=januar, 1=februar...11=decembar
const month = new Date().getMonth();
console.log(month);

const SeasonDisplay = () =>{
    return(
        <div>
            Season 
        </div>
    );
};

export default SeasonDisplay;