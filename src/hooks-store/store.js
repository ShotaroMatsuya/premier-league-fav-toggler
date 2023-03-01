import { useState, useEffect } from 'react';

//sharing data by import this file
let globalState = {};
let listeners = [];
let actions = {}; //actionIdentifier(key):actions(Func)

//custom hooks ..sharing logic
export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    //componentDidMount
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      //componentUnmount
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch]; //useReducerと同じ
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
