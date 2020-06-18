//@ts-check
/**
 * @param {{id: string, title: string; description: string; tags: string; genre: string; audience: string; }} state
 * @param {{type: string; title?: string; description?: string; tags?: string; genre?: string; audience?: string; payload?: {}; }} action
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
    case "setTags":
      return {
        ...state,
        tags: action.tags,
      };
    case "setGenre":
      return {
        ...state,
        genre: action.genre,
      };
    case "setAudience":
      return {
        ...state,
        audience: action.audience,
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
