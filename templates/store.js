export const NEW = 'NEW';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case NEW:
        return {
          ...state
        }
      break;
    default:
        return state;
      break;
  }
}
