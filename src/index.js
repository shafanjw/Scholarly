// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';



// ReactDOM.render(<App />, document.getElementById("root"));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Get the container to render the app
const container = document.getElementById('root');

// Create the root
const root = createRoot(container);

// Render the app
root.render(<App />);


