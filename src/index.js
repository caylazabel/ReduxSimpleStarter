import React from 'react';
import ReactDOM from 'react-dom';

// create component. this component// //should produce html.//

const App = () => {
  return <div>Hi!</div>;
}

//take this compoent's generated HTML and //put it on the page//

ReactDOM.render(<App />, document.querySelector('.container'));
