import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { client } from '../../api/client'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    return await client.get('users')
})

const usersAdapter = createEntityAdapter({
    selectId: (user) => user.id,
    sortComparer: (a, b) => a.firstName.localeCompare(b.firstName)
})
const initialState = usersAdapter.getInitialState({
    status: 'idle'
})


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchUsers.fulfilled]: (state, action) => {
            usersAdapter.upsertMany(state, action.payload)
            state.status = 'idle'
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = 'idle'
            console.log(action.payload)
        }
    }
})

export default usersSlice.reducer