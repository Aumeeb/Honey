import { AnyAction } from "redux";
import { IHomeState } from "../routes/Home/Home";


export type Sex = "男" | "女";
// 第一步 定义行为
export enum HomeType {
    TeacherComment,
    Gift
}

interface BaseHomeType{
    type: HomeType;
}

export class HomeAction implements AnyAction {
    [extraProps: string]: any;
    type: HomeType;

   static sendGifts(): FullScore {
        return { type: HomeType.Gift, data: { english: 100 } }
    }

  static  comment(sex: Sex): IComment {
        if (sex == "男") {
            return {
                type: HomeType.TeacherComment,
                teacher: '刘老师(男)',
                excellence: '学习认真',
                deficiency: '课间打闹',
            }
        } else {
            return {
                type: HomeType.TeacherComment,
                teacher: '张老师(女)',
                excellence: '乐于助人',
                deficiency: '贪玩',
            }
        }
    }
}

export interface FullScore extends BaseHomeType {
    data: IHomeState;
}
export interface IComment extends BaseHomeType {
    teacher:string;
    excellence:string;
    deficiency:string;
}

