import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe("Our first test", () => {
    it('should pass', () => {
        expect(true).to.equal(true); 
    });
});

describe("index.html", () => {
    it('it should have h3  that says Users', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, (err, window) => {
            const h3 = window.document.getElementsByTagName('h3')[0];
            expect(h3.innerHTML).to.equal("Users");
            done();
            window.close();
        });
    });
});