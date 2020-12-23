import{
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST,
    REMOVE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT,
    GET_GUESTS,
    GUESTS_ERROR
} from '../types'

export default(state,{type,payload})=>{
    switch(type){
        case GET_GUESTS:
            return{
                ...state,
                guests:payload
            }
        case ADD_GUEST:
            return{
                ...state,
                guests: [...state.guests,payload]
            }
            case REMOVE_GUEST:
                return{
                    ...state,
                    guests: state.guests.filter(guest => guest._id !== payload)
                }
                case UPDATE_GUEST:
                    return{
                        ...state,
                        guests: state.guests.map(guest=> guest._id === payload._id ? payload : guest)
                        
                    }
                    case EDIT_GUEST:
                        return{
                            ...state,
                            editAble:payload
                        }
                        case CLEAR_EDIT:
                            return{
                                ...state,
                                editAble:null
                            }
                              case  SEARCH_GUEST:
                                const reg = new RegExp(`${payload}` ,'gi')
                                return{
                                    ...state,
                                    search:state.guests.filter(guest=> guest.name.match(reg))
                                }
                                case GUESTS_ERROR:
                                    return{
                                        ...state,
                                        errors:null,
                                        errors:payload
                                    }
                                        case CLEAR_SEARCH:
                                            return{
                                                ...state,
                                                serach:null
                                            }
                                            case  TOGGLE_FILTER:
                                            return{
                                                ...state,
                                                filterGuest:  !state.filterGuest
                                            }
                                            default:
                                            return state
          }

}
