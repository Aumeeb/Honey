import { AnyAction } from "redux";
import { IHomeProps } from "../routes/Home/Home";

type HomeActionType = 'failure' | 'takeParents' | 'cannotGoHome' | 'biteAss' | 'kneel' | 'acceptGift'
export class HomeAction implements AnyAction {
    [extraProps: string]: any;
    type: HomeActionType;

    getGift = (state: IHomeProps) => {
        state.chinese++;
        return state;
    }
    biteAss = (state: IHomeProps) => {
        state.english = 0;
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