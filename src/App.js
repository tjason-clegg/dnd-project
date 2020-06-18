import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import styled from "styled-components";

import { ClassReducer as reducer } from "./reducers/classReducer";
import ClassForm from "./components/classForm";
import ClassList from "./components/classList";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>DnD 5e Classes!</h1>
        </header>
        <StyledButton>
          <ClassForm />
        </StyledButton>
        <StyledList>
          <ClassList />
        </StyledList>
      </div>
    </Provider>
  );
}

export default App;

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 0.4rem solid black;
  margin: 1rem;
  box-shadow: 3px 3px 15px 5px rgba(0, 0, 0, 0.66);
`;

const StyledButton = styled.div`
  flex-direction: column;
  margin: 1rem;
`;
