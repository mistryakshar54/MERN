import React from 'react';
import ProductListComponent from '../../ProductList/ProductList';
import './Content.scss';
const AppContent = (props)=>{
    return(
        <div className="app-content">
            <ProductListComponent/>
        </div>
    ); 


}

export default AppContent;