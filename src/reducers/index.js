let defaultState ={
    players:[]
}

let mainReducer =(state = defaultState, action) =>{
    if(action.type === "SET_DATA"){
        return{
            ...state,
            players:action.data
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;