
// 根据原始字符串求解出记录着图形的数据

export default function (express) {

    // 剔除开头和结尾的空白
    express = express.trim();

    let i = -1,

        // 当前面对的字符
        currentChar = null;

    // 获取下一个字符
    let next = function () {
        currentChar = i++ < express.length - 1 ? express[i] : null;
        return currentChar;
    };

    // 获取往后n个值
    let nextNValue = function (n) {
        return express.substring(i, n + i > express.length ? express.length : n + i);
    };

    next();

    let expressArray = [];

    while (true) {

        if (i >= express.length) break;

        if (currentChar == ')' || currentChar == '(' || currentChar == '|') {
            expressArray.push(currentChar);
            next();
        } else {

            let subExpressArray = [];

            while (i < express.length) {
                if (currentChar == ')' || currentChar == '(' || currentChar == '|') {
                    break;
                } else {
                    if (currentChar == '\\') {
                        subExpressArray.push(nextNValue(2));
                        next(); next();
                    } else if (currentChar == '[') {
                        let temp = "";
                        while (currentChar != ']') {
                            temp += currentChar;
                            next();
                        }
                        subExpressArray.push(temp + "]");
                        next();
                    } else if (currentChar == '{') {
                        let temp = "";
                        while (currentChar != '}') {
                            temp += currentChar;
                            next();
                        }
                        subExpressArray.push(temp + "}");
                        next();
                    } else {
                        subExpressArray.push(currentChar);
                        next();
                    }
                }

            }

            expressArray.push(subExpressArray);

        }

    }

    let expressObject = (function calcExpressObject(index) {

        // 不需要标记
        let type = 'noBlock';

        // 需要标记的块
        if (expressArray[index] == '(') {
            type = 'tagBlock';
            index += 1;
        }

        let _expressObject = {
            type,

            // 记录当前块的一段段内容
            contents: []
        };

        let i, content = [];

        // 一个个登记进去
        // 如果遇到括号，就调用自己归结
        for (i = index; i < expressArray.length; i++) {

            // 如果遇到 （ 说明需要归结孩子
            if (expressArray[i] == '(') {
                let _temp = calcExpressObject(i);
                i = _temp[1];
                content.push(_temp[0]);
            }

            // 如果遇到 ） 说明当前到头了
            else if (expressArray[i] == ')') {
                break;
            }

            // 如果遇到 | 说明并列的另一列开始了
            else if (expressArray[i] == '|') {
                _expressObject.contents.push(content);
                content = [];
            } else {

                // 不然就是普通的内容
                content.push(expressArray[i]);
            }
        }
        _expressObject.contents.push(content);

        return [_expressObject, i];
    })(0)[0];

    console.log(expressObject);

    return {
        imageData: {},
        width: 400,
        height: 300
    };

};
