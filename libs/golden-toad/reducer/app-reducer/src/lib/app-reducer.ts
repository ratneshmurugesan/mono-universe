export const actionTypes = {
  makeApiCall: 'MAKE_API_CALL',
  succesApiCall: 'SUCCESS_API_CALL',
  errorApiCall: 'ERROR_API_CALL',
  resetError: 'RESET_ERROR',
};

type actionProps = {
  type: string;
};

function appReducer(state: Record<string, unknown>, action: actionProps) {
  switch (action.type) {
    case actionTypes.makeApiCall: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.succesApiCall: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case actionTypes.errorApiCall: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case actionTypes.resetError: {
      return {
        ...state,
        hasError: {},
      };
    }
    default: {
      return state;
    }
  }
}

export default appReducer;
