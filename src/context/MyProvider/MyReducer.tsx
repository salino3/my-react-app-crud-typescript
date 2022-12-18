import { TOGGLE, DELETEONE, ADD_USER } from "../Types";


export function MyReducer (state: any, action: any) {

  console.log("action (id)", { action } );

  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        Info2: state.Info2.map((item: any) =>
          item.id === action.payload ? { ...item, major: !item.major } : item
        ),
      };
    case DELETEONE:
      return {
        ...state,
        Info2: state.Info2.filter((item: any) => item.id !== action.payload),
      };
      
    case ADD_USER:
      return {
        ...state,
        Info2: [...state.Info2, action.payload],
      };

    default:
      return state;
  }
}
