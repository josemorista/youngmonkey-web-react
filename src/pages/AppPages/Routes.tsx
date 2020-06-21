import React, { FC } from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import Cases from './Cases';

const Routes : FC = () =>{
  return <>
    <Route path='/' exact component={Home}/>
    <Route path='/cases' exact component={Cases} />
  </>
}

export default Routes;