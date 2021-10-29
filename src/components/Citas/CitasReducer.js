export const citasReducer=(state,action)=>{
    switch (action.type) {
        case "add":
            return [...state,action.payload];

        case "delete":
            return state.filter(cita=>cita.id!==action.payload);
    
        default:
            return state;
    }
}


