import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  //  console.log("In createDataContext Initialized");
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //Example: actions === {addBlogPost: (dispatch} => {return () => {}}}

    // console.log(
    //   "In createDataContext > Provider Method with reducer and state ",
    //   reducer,
    //   state
    // );
    const boundActions = {};
    for (let key in actions) {
      // console.log(
      //   "In createDataContext > Provider Method with Action Keys -> ",
      //   key
      // );
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
