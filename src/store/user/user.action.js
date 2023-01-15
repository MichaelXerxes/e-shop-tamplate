import { createAction } from "../../utils/reducer/reducer.utils"
import { USER_ACTION_TYPE } from "./user.reducer"
export  const setCurrenUser=(user )=>createAction(USER_ACTION_TYPE.SET_CURRENT_USER);