import { configureStore } from "@reduxjs/toolkit";
import selectedPlayerReducer from "./selectedPlayer"
import favouritePlayersReducer from "./favouritePlayers";

export default configureStore({
    reducer: {
        selectedPlayer: selectedPlayerReducer,
        favouritePlayers: favouritePlayersReducer
    }
})