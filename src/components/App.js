import React from 'react';
import { Route } from 'react-router-dom';
import List from '../containers/List';
import Detail from '../containers/Detail';
import style from './App.module.css';

const App = () => (
  <div className={style.app}>
    <div className={style.list}>
      <Route component={List} />
    </div>
    <div className={style.detail}>
      <Route path="*" component={Detail} />
    </div>
  </div>
);

export default App;
