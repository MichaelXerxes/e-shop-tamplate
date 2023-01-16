import { createAction } from "../../utils/reducer/reducer.utils"
import { USER_SOME_ACTION_TYPE } from "./user.types";
export  const setCurrenUser=(user )=>createAction(USER_SOME_ACTION_TYPE.SET_CURRENT_USER,user);