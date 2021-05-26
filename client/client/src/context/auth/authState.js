import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";

import 
{ REGISTER_SUCCESS,
   REGISTER_FAIL,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   USER_LOADED,
   AUTH_ERROR,
   LOGOUT
  } from "./types";

const AuthState = (props) => {
  const initalState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initalState);

  const loadUser=async()=>{
    setAuthToken(localStorage.token);

    try {
      const res=await axios.get('http://localhost:8000/api/users/auth/authorization');
      dispatch({
        type:USER_LOADED,
        payload:res.data
      })
    } catch (error) {
      dispatch({
        type:AUTH_ERROR
      })
    }
  }

  const register = async (formData) => {

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("http://localhost:8000/api/users/create-user",formData,config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg,
      });
    }
  };

  const login=async (formData) =>{

    const config={
      headers:{
        'Content-Type': 'application/json'
      }
    }

    try {
      const res= await axios.post('http://localhost:8000/api/users/auth/login',formData,config);
      dispatch({
        type:LOGIN_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type:LOGIN_FAIL,
        payload:error.response.data.msg
      })
    }
  };

  const logout =()=>dispatch({type:LOGOUT})


  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        register,
        login,
        loadUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
  
};

export default AuthState;
