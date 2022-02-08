import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './container/App';
// import { Provider } from 'react-redux';
// import Store from './Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import TestResult from './container/TestResult';
import TestResult from './result/TestResult';
import { hydrate, render } from 'react-dom';
import Prolog from './stage/Prolog';
import Quiz from './stage/Quiz';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      {/* <Provider store={Store}> */}
        <Routes>
          <Route path="/" element={<Prolog />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result/:param" element={<TestResult />} />
        </Routes>
      {/* </Provider> */}
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
      {/* <Provider store={Store}> */}
        <Routes>
          <Route path="/" element={<Prolog />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result/:param" element={<TestResult />} />
        </Routes>
      {/* </Provider> */}
    </BrowserRouter>,
    rootElement
  );
}
