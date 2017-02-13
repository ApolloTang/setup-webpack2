const DEBUG = (process && process.env && process.env.DEBUG) ? true : false;
console.info('DEBUG: ', DEBUG); // eslint-disable-line no-console
if (DEBUG) {
    console.info('log from file: src/main.js'); // eslint-disable-line no-console
}

