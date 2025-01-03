import axios from 'axios';
import { API_URL } from '../../config/api.js';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './auth.actionType.js';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './auth.actionType.js';
// import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE} from './auth.actionType.js';

export const LoginUserAction = (LoginData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(`${API_URL}/auth/signin`, LoginData.data);
    if(data.jwt) {
        localStorage.setItem('jwt', data.jwt);
        // LoginData.navigate('/dashboard');
        }
        console.log("login success", data);
    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
    //   payload: error.response.data.message, 
    });
  }
}


export const RegisterUserAction = (LoginData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST });
      const { data } = await axios.post(`${API_URL}/auth/signup`, LoginData.data);
      if(data.jwt) {
          localStorage.setItem('jwt', data.jwt);
        //   LoginData.navigate('/dashboard');
          }
        console.log("register", data);
      dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        // payload: error.response.data.message, 
      });
    }
  }

  // export const GatProfileAction = (jwt) => async (dispatch) => {
  //   try {
  //     dispatch({ type: GET_PROFILE_REQUEST });
  //     const { data } = await axios.get(`${API_URL}/auth/users/profile`, 
  //     {
  //       Headers: {
  //       Authorization: `Bearer ${jwt}`,
  //       },
  //     });
  //       console.log("profile", data);
  //     dispatch({ type: GET_PROFILE_SUCCESS, payload: data.jwt });
  //   } catch (error) {
  //     dispatch({
  //       type: GET_PROFILE_FAILURE,
  //       // payload: error.response.data.message, 
  //     });
  //   }
  // }