import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions";

const ClassForm = (props) => {
  const handleGetData = (e) => {
    e.preventDefault();
    props.getData();
  };

  return (
    <>
      {props.isFetchingData ? (
        <div>/\/\ We are fetching your data for you /\/\</div>
      ) : (
        <button onClick={handleGetData}>Get Classes</button>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
  };
};

export default connect(mapStateToProps, { getData })(ClassForm);
