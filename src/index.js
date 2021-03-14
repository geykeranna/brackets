module.exports = function check(str, bracketsConfig) {
    let stack = []; //используется как стэк
    let ch = 0;
    for (let i = 0; i < str.length; i++) {
        ch = 0; // для проверки
        for (let j = 0; j < bracketsConfig.length; j++) { //здесь должна быть проверка на существование открывающей скобки
            if (str[i] === bracketsConfig[j][0]) { //если она существует(нашлась), то работаем
                if (str[i] !== bracketsConfig[j][1]) {  //если она нормальная
                    stack.push(str[i]);//добавляем в наш стэк
                    ch++;
                } else if (str[i] === bracketsConfig[j][0]) { //если нашлась, но открывающая и закрывающая совпадают
                    //то открывающую не добавляем в стек
                    //проверка на то, что такой символ в стеке есть
                    if(stack[stack.length - 1] !== str[i]) {
                        stack.push(str[i]);//добавляем в наш стэк
                        ch++;
                    }
                }
            }
        }
        if(ch === 0) { //если при прошлой проверки ничего не нашли(если нашли - нет смысла проверять эту часть)
            for (let j = 0; j < bracketsConfig.length; j++) { //здесь должна быть проверка на существование закрывабщей скобки
                if (str[i] === bracketsConfig[j][1]) { //если нашлась, то смотрим пару открывающую
                    if (stack[stack.length - 1] === bracketsConfig[j][0]) {//если открывающая совпала, то все ок-удаляем
                        stack.pop();
                    }
                    else
                        return false;
                    ch++;
                }
            }
        }
        if(ch === 0)
            return false; //если ничего не нашли ни в открывающей, ни в закрывающей
    }
    if (stack.length !== 0)
        return false;
    else
        return true;
}
