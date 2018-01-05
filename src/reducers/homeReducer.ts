import { HomeAction } from "../actions/action";
import { IHomeProps } from "../routes/Home/Home";

//const initialState: IHomeProps = { english: 0, chinese: 0, history: 0 }

export default  function homeReducer(state: IHomeProps , action: HomeAction) {
    switch (action.type) {
        case 'biteAss':
            return action.biteAss(state);

        case 'acceptGift':
            return action.getGift(state)
        default:
            return state
    }
}