import React, { useEffect } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import { getData } from "../actions";

const ClassList = (props) => {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.results.map((result) => <StyledDiv>{result.name}</StyledDiv>)
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.results,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(ClassList);

const StyledDiv = styled.div`
  border: 0.2rem solid black;
  margin: 0.5rem;
  padding: 0.3rem;
  box-shadow: 3px 3px 15px 5px rgba(0, 0, 0, 0.66);
`;
