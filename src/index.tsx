import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import MyProvider from "./context/MyProvider/MyProvider";
import TheProvider from './context/TheProvider/TheProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyProvider>
        <TheProvider>
          <App />
        </TheProvider>
      </MyProvider>
    </BrowserRouter>
  </React.StrictMode>
);


