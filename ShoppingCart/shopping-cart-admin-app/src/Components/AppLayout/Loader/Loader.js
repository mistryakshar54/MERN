import React from 'react';
import { useSelector , shallowEqual } from "react-redux";
const Loader = ( props ) => {
    const coreData =  useSelector( state => state.CoreReducer ,  shallowEqual);
    debugger;
    console.log("coreData", coreData.loadingState);
   
        if(coreData.loadingState){
            return <div>Loaded!</div>
        }
        else{
            return props.children;
        }
        
}
export default Loader;
