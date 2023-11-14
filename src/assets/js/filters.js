import BigNumber from "bignumber.js";

export function filterDecimal(value, digit=2) {
    if (isNaN(value)) {
        return '0';
    }

    const n = Math.pow(10, digit);
    const formattedValue = Math.floor(value * n) / n;

    // 检查是否为0
    if (formattedValue === 0) {
        return '0';
    }

    // 使用BigNumber进行格式化
    let result = new BigNumber(formattedValue).toFixed(digit, BigNumber.ROUND_DOWN)
    result = result.replace(/(\.\d*?[1-9])0+$/, '$1'); // 去除尾随零，但保留至少一个非零小数
    result = result.replace(/\.0+$/, ''); // 如果小数部分全为零，则去除整个小数部分
    result = result.replace(/\.$/, ''); // 如果字符串以小数点结尾，则去除小数点

    return result;
}

export function filterAddress(value) {
    if (typeof value !== 'string' || value.length < 8) {
        return value;
      }
    return value.slice(0, 4) + "…" + value.slice(-4);
  }