// @flow
const defaultState = {
  index: 1,
  routes: [
    { key: "InitA", routeName: "Main" },
    { key: "InitB", routeName: "Login" },
  ],
};

const navigation = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default navigation;
