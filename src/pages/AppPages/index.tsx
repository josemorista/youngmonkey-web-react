import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const AppPages : FC = () => {
  return (<BrowserRouter>
    <Routes />
  </BrowserRouter>)
}

export default AppPages;