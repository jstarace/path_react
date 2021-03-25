import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';

const layout = ( props ) => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
    <div>Footer</div>
  </Auxiliary>

);

export default layout;
