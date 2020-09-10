export const createUser = (user) => {
  return (dispatch, _) => {
    dispatch({ type: "CREATE_USER", user });
  };
};

export const deleteUser = (user) => {
  return (dispatch, _) => {
    dispatch({ type: "DELETE_USER", user });
  };
};
