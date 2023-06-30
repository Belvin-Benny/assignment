const authReducer = (state = { data: null }, action) => {
    switch (action.type) {
      case "AUTH":
        console.log(action);
        localStorage.setItem("Profile", JSON.stringify(action.data));
        // if data didn't exist it will not throw an error
        return { ...state, data: action.data };
      default:
        // break;
        return state;
    }
  };
  
  export default authReducer;