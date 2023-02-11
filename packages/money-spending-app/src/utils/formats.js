export const toCurrency = (value, options = {}) => {
    options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        ...options
    };

    return value.toLocaleString('en-US', options);
};