import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';


$.get('/filter', function(data) {
  console.log(JSON.stringify(data));
  ReactDOM.render (
      <App trackList={JSON.parse(data)}/>, document.getElementById('app')
  );
});
