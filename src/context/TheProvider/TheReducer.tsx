import { ADD_USER, DELETEONE } from "../Types";

export function TheReducer (state: any, action: any) {

  console.log("action thereducer (id)", { action } );

  switch (action.type) {

    case DELETEONE:
      return {
        ...state,
        Info: state.Info.filter((item: any) => item.id !== action.payload),
      };
      
    case ADD_USER:
      return {
        ...state,
        Info: [...state.Info, action.payload],
      };

    default:
      return state;
  }
}

