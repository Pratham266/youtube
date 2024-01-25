import { FETCH_YOUTUBE_FAILURE, FETCH_YOUTUBE_REQUEST, FETCH_YOUTUBE_SUCCESS } from "./youtubeTypes"

const initialState ={
    loading:false,
    data:[],
    error:``,
}

const youtubeReducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCH_YOUTUBE_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case FETCH_YOUTUBE_SUCCESS:
            return {
                ...state,
                data:action.payload,
            }
        case FETCH_YOUTUBE_FAILURE:
            return {
                ...state,
                error:action.payload
            }
        default : return state;
    }
}

export default youtubeReducer