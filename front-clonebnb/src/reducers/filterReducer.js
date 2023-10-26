export const TYPES = {
  SEARCH: 'search_filter',
  CATEGORY: 'category_filter'
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case TYPES.SEARCH:
      return {
        ...state,
        search: action.payload
      };
    case TYPES.RANGE:
      return {
        ...state,
        category: action.payload
      };
    default:
      return state;
  }
};
