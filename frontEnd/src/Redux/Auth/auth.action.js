// import axios from 'axios';
// import { API_URL } from '../../config/api.js';
// import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './auth.actionType.js';
// import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './auth.actionType.js';
// import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE} from './auth.actionType.js';

// export const LoginUserAction = (LoginData) => async (dispatch) => {
//   try {
//     dispatch({ type: LOGIN_REQUEST });
//     const { data } = await axios.post(`${API_URL}/auth/signin`, LoginData.data);
//     if(data.token) {
//         localStorage.setItem('jwt', data.token);
//         // LoginData.navigate('/dashboard');
//         }
//         console.log("login success", data);
//     dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
//   } catch (error) {
//     dispatch({
//       type: LOGIN_FAILURE,
//     //   payload: error.response.data.message, 
//     });
//   }
// }


// export const RegisterUserAction = (LoginData) => async (dispatch) => {
//     try {
//       dispatch({ type: REGISTER_REQUEST });
//       const { data } = await axios.post(`${API_URL}/auth/signup`, LoginData.data);
//       if(data.token) {
//           localStorage.setItem('jwt', data.token);
//         //   LoginData.navigate('/dashboard');
//           }
//         console.log("register", data);
//       dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
//     } catch (error) {
//       dispatch({
//         type: REGISTER_FAILURE,
//         // payload: error.response.data.message, 
//       });
//     }
//   }

//   export const GetProfileAction = (token) => async (dispatch) => {
//     try {
//       dispatch({ type: GET_PROFILE_REQUEST });
//       const { data } = await axios.get(`${API_URL}/api/users/profile`, 
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//         console.log("profile", data);
//       dispatch({ type: GET_PROFILE_SUCCESS, payload: data.jwt });
//     } 
//     catch (error) {
//       dispatch({
//         type: GET_PROFILE_FAILURE,
//         // payload: error.response.data.message, 
//       });
//     }
//   }






 







import axios from 'axios';
import { API_URL } from '../../config/api.js';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './auth.actionType.js';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './auth.actionType.js';
import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from './auth.actionType.js';


export const LoginUserAction = (LoginData, navigate) => async (dispatch) => {
  try 
  {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(`${API_URL}/auth/signin`, LoginData.data);
    
    if (data.token) 
    {
      localStorage.setItem('jwt', data.token);
      dispatch({ 
        type: LOGIN_SUCCESS, 
        payload: { user: data.user, jwt: data.token } 
      });
      navigate('/');  // Rediriger vers la page d'accueil après le succès
      window.location.href = '/';
    } 
    else {
      dispatch({ type: LOGIN_FAILURE });
    }
  } 
  catch (error) {
    console.error("Login error:", error);
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.message,  // Ajouter le message d'erreur
    });
  }
};


// export const LoginUserAction = (LoginData) => async (dispatch) => {
//   try {
//     dispatch({ type: LOGIN_REQUEST });
//     const { data } = await axios.post(`${API_URL}/auth/signin`, LoginData.data);
//     if(data.token) {
//         localStorage.setItem('jwt', data.token);
//         // LoginData.navigate('/dashboard');
//         }
//         console.log("login success", data);
//     dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
//   } catch (error) {
//     dispatch({
//       type: LOGIN_FAILURE,
//     //   payload: error.response.data.message, 
//     });
//   }
// }



export const RegisterUserAction = (LoginData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const { data } = await axios.post(`${API_URL}/auth/signup`, LoginData.data);
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      console.log("register", data);
      dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
      navigate('/');  // Redirige vers la page d'accueil après inscription
    }
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      // payload: error.response.data.message,
    });
  }
};

// export const GetProfileAction = (token) => async (dispatch) => {
//   try {
//     dispatch({ type: GET_PROFILE_REQUEST });
//     const { data } = await axios.get(`${API_URL}/api/users/profile`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log("profile", data);
//     dispatch({ type: GET_PROFILE_SUCCESS, payload: data.jwt });
//   } catch (error) {
//     dispatch({
//       type: GET_PROFILE_FAILURE,
//       // payload: error.response.data.message,
//     });
//   }
// };


export const GetProfileAction = (token) => async (dispatch) => {
  try {
    dispatch({ type: "GET_PROFILE_REQUEST" });

    const { data } = await axios.get(`${API_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("API Profile Data:", data); // Log the profile data
    console.log("------------------->:", data.firstName); // Log the profile data


    // Make sure you're passing the correct data
    dispatch({ type: "GET_PROFILE_SUCCESS", payload: data }); // Ensure this is passing 'data' properly
  } catch (error) {
    console.error("Profile Error:", error);
    dispatch({ type: "GET_PROFILE_FAILURE", payload: error.response?.data?.message });
  }
};