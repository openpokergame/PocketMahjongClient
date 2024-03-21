/****************************************************************************
 Copyright (c) Bit Technologies Inc.

 代码：https://github.com/openpokergame/PocketMahjongClient.git

 官网一：http://qipaiplay.com

 官网二：http://openpokergame.net

 玩法博客：http://www.xgeplayer.com

 email: openpokerorg@gmail.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

import {js} from "cc";
import {Singleton} from "./Singleton";

export class CtrlMgr {
    private ctrlList;

    static get ins() {
        return Singleton.ctrlMgr;
    }

    public addSingleton(ins: any): void {
        if (ins instanceof CtrlMgr) return;
        this.ctrlList = this.ctrlList || [];
        this.ctrlList.push(ins);
        let clz = js.getClassName(ins);
        window[clz] = ins;
    }

    /**
     * 重置所有控制器中的数据
     */
    public clearAll(): void {
        if (!this.ctrlList) return;
        this.ctrlList.forEach(ins => {
            ins.clearCache && ins.clearCache();
        })
    }
}

export interface ICtrl {
    /**
     * 清空缓存的数据
     */
    clearCache(): void;
}