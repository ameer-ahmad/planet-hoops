import { createSlice } from "@reduxjs/toolkit"

export const selectedPlayerSlice = createSlice({
    name: "selectedPlayer",
    initialState: {
        player: {}
    },
    reducers: {
        selectPlayer: (state, action) => {
            state.player = action.payload
        }
    },
})

export const { selectPlayer } = selectedPlayerSlice.actions

export default selectedPlayerSlice.reducer