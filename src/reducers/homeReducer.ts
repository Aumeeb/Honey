import { HomeAction ,HomeType}  from "../actions/action";
import { IHomeState } from "../routes/Home/Home";

//const initialState: IHomeProps = { english: 0, chinese: 0, history: 0 }

export default  function homeReducer(state: IHomeState={ english:1} , action: HomeAction) {
    switch (action.type) {
        case HomeType.TeacherComment:
            return HomeAction.comment('男');
        case  HomeType.Gift:
            return HomeAction.sendGifts();
        default:
            return state
    }
}