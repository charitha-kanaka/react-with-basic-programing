import React, { Component } from 'react'

export class LifeCycleDemo extends Component {


    constructor(){
        //optional to have constructer
        super();
        console.log('=======================1.Inside Constructer=================');

        //ideal place for your initial component wide data
        this.state={
            isLoading:true,
            isError:false,
            featureName:" ",
        };
    }


//LifeCycle hook /method
componentDidMount(){
console.log("_____________3. Inside componentDidMount______________"); 
 

//this method will be executed ONLY ONCE after initial rendering
//this method will be called when the component's UI comes in to view
//this is the ideal place for you to send REST API calls

// After fetching the data from backend (REST API backend), update the state
//mocking the REST API call using timeout

setTimeout(() =>{
//up on successful response

    this.setState({
        isLoading: false,
          isError:false,
        featureName:'Understanding lifecycle hooks in details'
    });

//upon getting an error
// this.setState({
//     isLoading: false,
//     isError: true,
//     featureName:''
// })
},5000);
}

// shouldcomponentUpdate return false it won't re-render the render method.
//let's decide weather redender to happend or not 
shouldComponentUpdate(nextProps, nextState){
    console.log('========4.Inside shouldComponentUpdate======');
    //when the state is updated ----this will be called
    //it must either return true or false
    // compare the prevState (this.state) and nextState
    // if changes found, then return true else false
    console.log(this.state);
    console.log(nextState)
    return true;
}

. 

//weather the re-rendering is over or not
componentDidUpdate(PrevProps, PrevState){
    console.log('=====6.Inside ComponentDidUpdate===')
    //this is called immediately after update in JSX (after re-render)
    // will NEVER be called after initial rendering
//ideal place for tiny dom manupulations like style updates
document.getElementById('myPara').style.color='green';
}


  render() {

    //render method will be call immediately after constracter ----Initial rendering
    console.log('_________________2 & 5 Inside Render______________');


    if(this.state.isLoading){
        return(
            <div className="spinner-border text-success" role="status"></div>
        );
    }

    if(this.state.isError){
        return(
            <div className='alert alert-danger'>some error occured! try again later</div>
        );
    }

    return (
      <div>
        <h3>LifeCycleDemo</h3>
        <p id='myPara'>Features we are learning:{this .state.featureName}</p>
        
      </div>
    )
  }
}

export default LifeCycleDemo