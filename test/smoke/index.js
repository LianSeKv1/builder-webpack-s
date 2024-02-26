const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({
    timeout: '10000ms',

});

// 进入bigScreen目录
process.chdir(path.resolve(__dirname, 'bigScreen'));

// rimraf删除dist目录执行回调函数
rimraf('./dist', () => {
    const  prodConfig = require('../../lib/webpack.config');
    webpack(prodConfig, (err, stats) => {
        if (err) {
            console.error(err);
            process.exit(2)
        }
        console.log(stats.toString({
            colors: true,
            modules: false,
            children: false,
        }));
        console.log("begin test");
        mocha.addFile(path.resolve(__dirname, 'html-test.js'));
        mocha.run()
    })

})
