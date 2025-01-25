import {
    POST_CREATE_REQUEST,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,
    GET_ALL_POST_REQUEST,
    GET_ALL_POST_SUCCESS,
    GET_ALL_POST_FAILURE,
    GET_USER_POST_REQUEST,
    GET_USER_POST_SUCCESS,
    GET_USER_POST_FAILURE,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    LIKE_POST_FAILURE,
} from "./post.actionType";


const initialState = {
    post: null,
    loading: false,
    error: null,
    posts: [],
    like: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_CREATE_REQUEST:
        case GET_ALL_POST_REQUEST:
        case GET_USER_POST_REQUEST:
             
            return {
                ...state,
                loading: true,
            };
        case POST_CREATE_SUCCESS:
        case GET_USER_POST_SUCCESS:
        case GET_ALL_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                post: action.payload,
                posts: [action.payload, ...state.posts],
            };
        case POST_CREATE_FAIL:
        case GET_ALL_POST_FAILURE:
        case GET_USER_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case GET_ALL_POST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
            }; 
    }};
    export default postReducer; 