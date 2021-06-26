import createDataContext from "./createDataContext";
import axios from "../api/axios";

const API_KEY = "8a4bfbd3a9be495faddd031b6b24a226";

const INITIAL_STATE = {
  StatesSummary: [],
  CountiesStateSummary: [],
};

const ZReducer = (state, action) => {
  switch (action.type) {
    case "get_statesSummary":
      return { ...state, StatesSummary: action.payload };
    case "get_stateCountiesSummary":
      return { ...state, CountiesStateSummary: action.payload };
    default:
      return state;
  }
};

const getCovidDataStatesSummary = (dispatch) => {
  return async () => {
    try {
      const resp = await axios.get(`/states.json?apiKey=${API_KEY}`);
      dispatch({ type: "get_statesSummary", payload: resp.data });
    } catch (e) {
      console.log("Error Encountered in getCovidDataStatesSummary -> ", e);
      return null;
    }
  };
};

const getCovidDataStateCountiesSummary = (dispatch) => {
  return async (usState) => {
    try {
      const resp = await axios.get(`/county/${usState}.json?apiKey=${API_KEY}`);
      //console.log("Response from Counties ", resp.data);
      dispatch({ type: "get_stateCountiesSummary", payload: resp.data });
    } catch (e) {
      console.log(
        "Error Encountered in getCovidDataStateCountiesSummary -> ",
        e
      );
      return null;
    }
  };
};

export const { Context, Provider } = createDataContext(
  ZReducer,
  { getCovidDataStatesSummary, getCovidDataStateCountiesSummary },
  INITIAL_STATE
);
