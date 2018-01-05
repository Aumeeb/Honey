import { AnyAction } from "redux";
import { IHomeState } from "../routes/Home/Home";

type HomeActionType = 'failure' | 'takeParents' | 'cannotGoHome' | 'biteAss' | 'kneel' | 'acceptGift'
export class HomeAction implements AnyAction {
    [extraProps: string]: any;
    type: HomeActionType;

    getGift = (state: IHomeState) => {
        return state;
    }
    biteAss = (state: IHomeState) => {
        if (state.english != undefined) {
            state.english += 1;
        }
        return state;
    }
}

export interface ILogin {
    type: HomeActionType,
    data: any;
}

export function getGift(data: any) {
    let result: ILogin = {
        type: 'acceptGift',
        data: data
    }
    return result;

}