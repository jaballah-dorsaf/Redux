import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { decrement, add } from "../action/actions";
function Counter(props) {
  return (
    <div>
      <div className="profile">
        <h2>Counter</h2>
        <h3>{props.counter.counter}</h3>
        <Button
        style={{
          width: 200,
	        height: 55,
	        borderRadius: 27.5,
	        marginTop: 20,
	        fontWeight: 700,
	        fontSize: 14,
          letterSpacing: 1.15,
          marginBottom: 20,
          marginRight: 20,
          marginLeft:20,
        }}
          variant="secondary"
          onClick={() => props.decrement()}
        >
          -
        </Button>
        <Button 
        style={{
          width: 200,
	        height: 55,
	        borderRadius: 27.5,
	        marginTop: 20,
	        fontWeight: 700,
	        fontSize: 14,
          letterSpacing: 1.15,
          marginBottom: 20,
          marginRight: 20,
          marginLeft:20,
        }}
        onClick={() => props.add()}>
          +
        </Button>
      </div>
      
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state.CounterReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(add()),
    decrement: () => dispatch(decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
