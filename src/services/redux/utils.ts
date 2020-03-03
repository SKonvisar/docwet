export function createReducer<S>(initialState: S, handlers: any) {
  return (state = initialState, action: any): S => {
    const handler = handlers[action.type];
    if (!handler) return state;
    return { ...state, ...handler(state, action) };
  };
}
