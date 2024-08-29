import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './test-counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    console.log(state)
    return state + 1
  }),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);