import React from 'react';
import ListView from '../../../UI/ListView/ListView';
const ProductListCompoenent  = ( props ) => {
    const data = [{
        "name":"Laptop",
        "price":50000,
        "code":"Laptop-785",
        "isActive":"true"
    }];
    const headers = [
        {
            title : "name", align : "left",
        },
        {
            title : "price", align : "center",
        },
        {
            title : "code", align : "left",
        },
        {
            title : "isActive", align : "center",
        }

    ];
    return <ListView 
     data={data}
     headers={headers} />
    
};

export default ProductListCompoenent;