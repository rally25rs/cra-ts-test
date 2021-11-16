import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button, {ButtonProps} from './App';
import reportWebVitals from './reportWebVitals';

const p: ButtonProps = {
  name: 'test',
};

ReactDOM.render(
  <React.StrictMode>
    <Button {...p} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
