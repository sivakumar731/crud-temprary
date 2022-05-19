import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Create1 from './components/Create1';
import Delete from './components/Delete';
import Product from './components/Product';
import Read from './components/Read';
import Update from './components/Update';


export default class Routing extends React.Component {
  render() {
    return (
      <Routes>
<Route path='/delete' element={<Delete />} />
<Route path='/update' element={<Update />} />
<Route path='/read' element={<Read />} />
<Route path='/create1' element={<Create1 />} />
<Route path='/product/:id' element={<Product />} />




      </Routes>
    )
  }
}
