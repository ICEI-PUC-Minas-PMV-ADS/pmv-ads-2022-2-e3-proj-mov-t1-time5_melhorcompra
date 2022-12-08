import React from 'react';

import {useUser} from '../contexts/UserContext';

import Main from './Main';
import Auth from './Auth';
import ProcessedList from '../pages/ProcessedList';
import Inicio from '../pages/Inicio'
//import Main from './MainTab';

const Route = () => {

  const {signed} = useUser();

  return (
    <>
    {
      signed 
      ? <Main />
      : <Auth />
    }
    </>
  )
}

export default Route;