import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ThunkAction, Action } from '@reduxjs/toolkit';
import { store } from './store';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
