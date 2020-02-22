import React from 'react';

const Loader = ()=>{

    const spinner = () =>{
        return "Please, accept location request!"
    }
    return(
        <div className = "ui active dimmer">
           <div className = "ui text loader">{spinner()}</div>
        </div>
    )
}

export default Loader;