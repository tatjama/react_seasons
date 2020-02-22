import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    constructor(props){
        super(props);
    //Here we put state, values that are before fetch data    
        this.state = {lat: null, errorMessage :''}
    }
    
    //Here we put data that we fetch when we are loading page for the first time
    //We change state with function setState ONLY!!!
    componentDidMount(){
     window.navigator.geolocation.getCurrentPosition(
        position =>this.setState({lat: position.coords.latitude}),
        err =>this.setState({errorMessage: err.message})
    )
     }
     
     renderConfig(){
         if(this.state.lat && !this.state.errorMessage){
             /*We put component Season Display and give it property lat*/
                   
             return <SeasonDisplay lat = {this.state.lat}/>
         }else if(!this.state.lat && this.state.errorMessage){
             return this.state.errorMessage
         }
         return 'Loading'
     }
         
     
     
     render(){
         console.log(this.state.lat);
         console.log(this.renderConfig());
        return(
            <div>                
                {this.renderConfig()} 
            </div>
        );
     };
};

ReactDOM.render(<App/>, document.querySelector('#root'));