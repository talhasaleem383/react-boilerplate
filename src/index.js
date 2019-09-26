import React from 'react';
import ReactDOM from 'react-dom';

    class Clock extends React.Component {
       constructor(props){
           super(props);
           this.state = {timer: new Date()};
       }
       componentDidMount() {
        this.timerID = setInterval(
          () => this.updateState(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

       updateState(){
            this.setState({timer:new Date()});
       }

    
        render() {
            return  <p>Current time:<h2> {this.state.timer.toLocaleTimeString()} </h2></p>;
            }
        }
        
        ReactDOM.render( <Clock/>, document.querySelector('#root'));
      