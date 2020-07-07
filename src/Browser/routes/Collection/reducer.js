//@ts-check
/**
 * This will be used by React.useReducer
 * @param {{id: string, title: string, description: string, template: string }} state
 * @param {{ type: string; title?: string; description?: string; template?: string; payload?: {}; }} action
 */
export default (state, action) => {
  switch (action.type) {
    case "setTitle":
      return {
        ...state,
        title: action.title,
      };
    case "setDescription":
      return {
        ...state,
        description: action.description,
      };
    case "setTemplate":
      return {
        ...state,
        template: action.template,
      };
    case "setAll":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
