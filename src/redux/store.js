import { configureStore } from "@reduxjs/toolkit";
import selectedPlayerReducer from "./selectedPlayer"

export default configureStore({
    reducer: {
        selectedPlayer: selectedPlayerReducer
    }
})