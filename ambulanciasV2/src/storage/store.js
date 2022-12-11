import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/login/loginSlice'
import sidebarReducer from './features/showSidebar/showSidebarSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    sidebarShow : sidebarReducer
  },
})