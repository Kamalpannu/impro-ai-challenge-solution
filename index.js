"use strict";
// index.ts
Object.defineProperty(exports, "__esModule", { value: true });
// Bug fix: console.warning does not exist. Correct method is console.warn
console.warn('⚠️⚠️⚠️⚠️⚠️');
const files = [
    { name: 'README.md', content: '# Welcome to the Impro.AI puzzle\nFollow instructions carefully.' },
    { name: 'Workload.yaml', content: 'task: Fix bugs, write TypeScript, push to GitHub' }
];
function showFiles(files) {
    files.forEach(file => {
        console.log(`--- ${file.name} ---`);
        console.log(file.content);
        console.log('-----------------\n');
    });
}
function Init() {
    console.log('Initializing Impro.AI puzzle solution...');
    showFiles(files);
    console.log('Puzzle processing complete ✅');
}
Init();
//# sourceMappingURL=index.js.map