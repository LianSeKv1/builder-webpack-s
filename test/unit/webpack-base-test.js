const assert = require('assert');

describe('webpack.base.js test case', function () {
    const baseConfig = require('../../lib/webpack.config.js');
    console.log(baseConfig.entry);

    it('entry', () => {
        assert.equal(baseConfig.entry, './index.js');
    })
})