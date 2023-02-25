const StaticReducer = (oldState, action) => {
  if (action.type === "STATIC_DATA") {
    return { ...action.playload, staticLaoding: false };
  }
  throw new Error("action didn't match");
};

export { StaticReducer };
