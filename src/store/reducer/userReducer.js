const initState = {
  users: [
    {
      userName: "Bola Adebayo",
      userEmail: "bola@gmail.com",
      userPhone: "08012466658",
      userCountry: "Jamaica",
      userDob: "1885-05-03",
      userImg: null,
    },
    {
      userName: "John Morgan",
      userEmail: "morgan@gmail.com",
      userPhone: "08021456655",
      userCountry: "England",
      userDob: "1325-02-12",
      userImg: null,
    },
  ],
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      state.users.push(action.user);
      return { ...state };
    case "DELETE_USER":
      const usrToDel = action.user;
      state = deleteUser(state, usrToDel);
      return { ...state };
      
    default:
      return state;
  }
};

export default userReducer;

function deleteUser(state, usrToDel) {
  state.users = state.users.filter((user) => {
    return (
      user.userName !== usrToDel.userName &&
      user.userEmail !== usrToDel.userEmail
    );
  });

  // const userIndx = state.users.findIndex((user) => {
  //   return (
  //     user.userName === usrToDel.userName &&
  //     user.userEmail === usrToDel.userEmail
  //   );
  // });
  // console.log(userIndx);
  // state.users = state.users.splice(userIndx, 1);

  return state;
}
