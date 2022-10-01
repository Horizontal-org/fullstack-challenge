const initialState = { result: [], loading: false, searchKey: '' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'onSearch':
      return {
        ...state,
        loading: true,
        result:[],
        searchKey: action.searchKey?.toLowerCase(),
      };
    case 'onSearchSuccess':
      return {
        ...state,
        loading: false,
        result: action.data,
      };
    case 'onSearchFailed':
      return {
        ...state,
        result: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
