import { createSlice } from "@reduxjs/toolkit"

export const favouritePlayerSlice = createSlice({
    name: "favouritePlayers",
    initialState: {
        players: []
    },
    reducers: {
        addPlayer: (state, action) => {
            state.players = [...state.players, action.payload]
        },
        removePlayer: (state, action) => {
            state.players = state.players.filter(player => {
                return player.id !== action.payload.id
            })
        }
    }
})

export const { addPlayer, removePlayer } = favouritePlayerSlice.actions

export default favouritePlayerSlice.reducer