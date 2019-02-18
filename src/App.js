import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const style = {position:'absolute',
top: 0, left: 0, right: 0, bottom: 0,
backgroundColor: 'beige'}

function render(event,show){
  ReactDOM.render(
    <div onMouseMove = {(event) => 
    render(Object.assign({}, event),show)}

    onMouseEnter={(event) => 
    render(Object.assign({},event),true)}

    onMouseLeave={(event) =>
    render(Object.assign({}, event),false)}

    style = {style}>
    {show && <div style={{position: 'fixed', 
    top: event.clientY, left: event.clientX}}>
    clientX: {event.clientX}<br/>
    clientY: {event.clientY}<br/>
    pageX: {event.pageX}<br/>
    pageY: {event.pageY}<br/>
    screenX: {event.screenX}<br/>
    screenY: {event.screenY}<br/>
    </div>}
    </div>,
    document.getElementById('app')
  )
}

render()


class App extends Component {


  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
