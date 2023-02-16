//store.ts
import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todos/todoSlice";

// configureStore関数に登録するReducerが単数の場合は、それがStoreのルートリデューサーとなります。
// 複数の場合は、combineReducersでReducerをまとめてから登録することをお勧めします。
// また、configureStore関数にはreducer以外にも、middleware、devTools、preloadedState、enhancersもオプションとしてあります。

export const store = configureStore({
  reducer: todoSlice.reducer,
});
