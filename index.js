const util = require('util');
const exec = util.promisify(require('child_process').exec);


exports.handler = function () {
    (async function f() {
        console.log('Started!');
        console.log('Started!');
        console.log('Started!');
        await exec('mkdir /lib/x86_64-linux-gnu');
        await exec('cp ./libssl.so.1.0.0 /lib/x86_64-linux-gnu/libssl.so.1.0.0');
        const res = await exec('./simc test.simc');
        console.log(res);
    }());
};
