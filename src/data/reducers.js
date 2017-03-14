import 'babel-polyfill'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'

const status = (state={}, action) => {
  switch (action.type){
    case 'REQUEST_ERROR':
      return {...state, 'request_state': 'error', 'error_type': action.error};
    default:
      return state
  }
};

const user = (state={}, action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return {...state, ...action.user, fetched_user: true};
    case 'REGISTER_ROLE':
      return {
        ...state, role_arn:action.role_arn};
    case 'RECEIVE_VPC':
      return {
        ...state, vpc: action.vpc
      };
    case 'FETCH_ERROR':
      return {...state, fetched_user: true, fetch_error: action.error};
    case 'RECEIVE_USER_ACCESS':
      return {...state, fetched_user: true, access_key_pair: action.access_key_pair};
    default:
      return state
  }
};

const login = (state={}, action) => {
  switch (action.type) {
    case 'RECEIVE_GOOGLE_URL':
      return {...state, google: action.url};
    default:
      return state
  }
};

const submission = (state={}, action) => {
  switch (action.type) {
    case 'REQUEST_UPLOAD':
      return {...state, file:action.file, file_type: action.file_type};
    case 'UPDATE_FILE':
      return {...state, file:action.file};
    case 'RECEIVE_PROJECTS':
      return {...state, projects:action.data};
    case 'RECEIVE_AUTHORIZATION_URL':
      return {...state, oauth_url:action.url};
    case 'RECEIVE_SUBMISSION_LOGIN':
      return {...state, login:state.result, error:state.error};
    case 'RECEIVE_SUBMISSION':
      return {...state, submit_result:action.data, submit_status:action.submit_status};
    default:
      return state
  }
};

const reducers = combineReducers({login, user, status, submission, form: formReducer, routing:routerReducer});

export default reducers