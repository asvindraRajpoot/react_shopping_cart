import React from "react";
import { connect } from "react-redux";
import { handleOrderBy } from "../store/actions";

function OrderBy(props) {
  
  function handdleClick(e){
    props.dispatch(handleOrderBy(e))
  }



  return (
    <div className="sort">
      Order by
      <select value={props.selectedOrder} onChange={(e)=>handdleClick(e)}>
        <option value="">Select</option>
        <option value="lowest">Lowest to highest</option>
        <option value="highest">Highest to lowest</option>
      </select>
    </div>
  );
}

export default connect(()=>{
  return {
   
  }
})(OrderBy);
