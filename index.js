module.exports = function warmup(temperature) {
    const celsius = temperature;
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
};
