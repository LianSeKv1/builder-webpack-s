const { globSync } = require("glob")

describe("Checking generated html files", () => {
    it ('should generate correct html files', (done) => {
        const files = globSync([
            './dist/index.html'
        ])
        if (files.length !== 0) {
            done();
        } else {
            throw new Error(' no correct html files generated');
        }
    })
})