import axios from "axios";
import {
    POST_CREATE_FAIL,
    POST_CREATE_REQUEST,
    POST_CREATE_SUCCESS,
    GET_ALL_POST_REQUEST,
    GET_ALL_POST_SUCCESS,
    GET_ALL_POST_FAILURE,
    GET_USER_POST_REQUEST,
    GET_USER_POST_SUCCESS,
    GET_USER_POST_FAILURE,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    LIKE_POST_FAILURE,
} from "./post.constants";
import { GET_ALL_POST_FAILURE, GET_ALL_POST_REQUEST } from "./post.actionType";


const createPost = (post) => async (dispatch) => {
    try {
        dispatch({ type: POST_CREATE_REQUEST });
        const { data } = await axios.post("/api/post", post);
        dispatch({ type: POST_CREATE_SUCCESS, payload: data });
        console.log("created post" , data);
    } catch (error) {
        dispatch({
        type: POST_CREATE_FAIL,
        payload: error.response.data.message,
        });
        console.log("error" , error);
    }
}

const getAllPosts = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_POST_REQUEST });
        const { data } = await axios.get("/api/post");
        dispatch({ type: GET_ALL_POST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
        type: GET_ALL_POST_FAILURE,
        payload: error.response.data.message,
        });
    }
}

const getUsersPosts = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_USER_POST_REQUEST });
        const { data } = await axios.get(`/api/post/user/${id}`);
        dispatch({ type: GET_USER_POST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
        type: GET_USER_POST_FAILURE,
        payload: error.response.data.message,
        });
    }
}


const likePost = (id) => async (dispatch) => {
    try {
        dispatch({ type: LIKE_POST_REQUEST });
        const { data } = await axios.put(`/api/post/like/${id}`);
        dispatch({ type: LIKE_POST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
        type: LIKE_POST_FAILURE,
        payload: error.response.data.message,
        });
    }
}