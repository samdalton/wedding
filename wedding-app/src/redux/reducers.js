import { TOGGLE_NAV } from './actions';

const defaultState = {
  flags: {
    showNav: false,
  },
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  if (action.type === TOGGLE_NAV) {
    newState.flags.showNav = !newState.flags.showNav;
  }

  return newState;
}

