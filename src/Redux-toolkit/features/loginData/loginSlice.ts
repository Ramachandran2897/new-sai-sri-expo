import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState = {
    data: null
}
const loginData = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addLoginResData: (state, action: PayloadAction<any>) => ({ ...state, data: action.payload })
    }
})
const loginReducer = loginData.reducer
const loginAction = loginData.actions
export { loginReducer, loginAction }