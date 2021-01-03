
import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_ERROR,
  DELETE_SERVICES_REQUEST,
  DELETE_SERVICES_SUCCESS,
  DELETE_SERVICES_ERROR

} from '../actionCreator'

const initialState = {
  loading: true,
  error: null,
  items: []
};

export default function serviceList(state = initialState, action) {
  
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
     
      return { ...state, loading: true, error: null };
    case FETCH_SERVICES_SUCCESS:
     
     
      return { ...state, loading: false, error: null, items: action.payload.items };
    case FETCH_SERVICES_ERROR:
   
      
      return { ...state, loading: false, error: action.payload.error };


    case DELETE_SERVICES_REQUEST:
      return { ...state, loading: true, error: null };
    case DELETE_SERVICES_SUCCESS:
      return { ...state, loading: false, error: null, items:[] };
    case DELETE_SERVICES_ERROR:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}