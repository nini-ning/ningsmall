/*
 * @Author: your name
 * @Date: 2021-06-06 18:48:23
 * @LastEditTime: 2021-06-09 21:19:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day11\supermall\src\common\utils.js
 */
//防抖
export function  debounce(func,delay){
    let timer=null;
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            func.apply(this,args);
        },delay)
    }
}
export function formatDate(date, fmt) {
    //1.获取年份
    //y+->1个或多个
    //y*->0个或多个
    //y？->0个或1个
    //fmt传过来的字符串 RegExp.$1全局对象就是匹配到的结果
      if (/(y+)/.test(fmt)) {
    //yyyy替换成后面的结果
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
    //2.获取
    //3.M+-->正则表达式中的一个规则 要匹配多个M
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      };
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + '';
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
      }
      return fmt;
    };
    
    function padLeftZero (str) {
      return ('00' + str).substr(str.length);
    };
    