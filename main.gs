String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

var toType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

function MAKEAJNABI(str) {
  str = String(str);
  for(var i = 0; i < str.length; i++) {
    Logger.log(str.charAt(i));
    switch(str.charAt(i)) {
      case '۰':
        str = str.replaceAt(i, '0');
        break;
      case '۱':
        str = str.replaceAt(i, '1');
        break;
      case '۲':
        str = str.replaceAt(i, '2');
        break;
      case '۳':
        str = str.replaceAt(i, '3');
        break;
      case '۴':
        str = str.replaceAt(i, '4');
        break;
      case '۵':
        str = str.replaceAt(i, '5');
        break;
      case '۶':
        str = str.replaceAt(i, '6');
        break;
      case '۷':
        str = str.replaceAt(i, '7');
        break;
      case '۸':
        str = str.replaceAt(i, '8');
        break;
      case '۹':
        str = str.replaceAt(i, '9');
        break;
    }
  }
  return str;
}
