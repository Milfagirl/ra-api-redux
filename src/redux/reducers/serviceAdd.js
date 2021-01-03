import { CHANGE_SERVICE_FIELD, CHANGE_SERVICE, CANCEL_CHANGE_SERVICE } from '../actionCreator'

const initialState = {
  name: '',
  price: '',
  editflag: false
};

export default function serviceAdd(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case CHANGE_SERVICE:
      const { id } = action.payload;
      return { ...state, id: id };
    case CANCEL_CHANGE_SERVICE:
      const {flag} = action.payload
      return { ...state, editflag: flag };

    default:
      return state;
  }
}