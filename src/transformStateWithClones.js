'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];
  let stateCopy = { ...state };

  for (const action of actions) {
    let newState = {};

    if (action.type === 'addProperties') {
      newState = {
        ...stateCopy,
        ...action.extraData,
      };
    }

    if (action.type === 'removeProperties') {
      newState = {
        ...stateCopy,
      };

      for (const key of action.keysToRemove) {
        delete newState[key];
      }
    }

    if (action.type === 'clear') {
      newState = {};
    }

    result.push(newState);
    stateCopy = newState;
  }

  return result;
}

module.exports = transformStateWithClones;
