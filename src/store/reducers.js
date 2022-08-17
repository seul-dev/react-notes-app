let initialState = [];
const reducers = (state = initialState, action) => {
  switch (action.type) {
    // case 'INIT': {
    //   return action.data;
    // }
    case 'CREATE': {
      const id = btoa(Math.random() * 200 + Math.random() * 200);
      return [
        ...state,
        {
          id,
          ...action.note,
        },
      ];
    }
    case 'REMOVE': {
      return state.filter((note) => note.id !== action.id);
    }
    // case 'EDIT': {
    //   newState = state.map((it) =>
    //     it.id === action.data.id ? { ...action.data } : it
    //   );
    //   break;
    // }
    default:
      return state;
  }
};

export default reducers;
