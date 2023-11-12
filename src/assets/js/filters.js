export function filterDecimal(value, digit=2) {
    if (isNaN(value)) {
        return '0';
    }
    const n = Math.pow(10, digit);
    return Number(Math.floor(value * n) / n).toFixed(digit);
  }

export function filterAddress(value) {
    if (typeof value !== 'string' || value.length < 8) {
        return value;
      }
    return value.slice(0, 4) + "…" + value.slice(-4);
  }