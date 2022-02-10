import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestResult from './result/TestResult';
import { hydrate, render } from 'react-dom';
import Prolog from './stage/Prolog';
import Quiz from './stage/Quiz';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Prolog />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result/:param" element={<TestResult />} />
        </Routes>
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Prolog />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result/:param" element={<TestResult />} />
        </Routes>
    </BrowserRouter>,
    rootElement
  );
}
