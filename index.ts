// index.ts

// Bug fix: console.warning does not exist. Correct method is console.warn
console.warn('⚠️⚠️⚠️⚠️⚠️');

// Simulate reading README.md and Workload.yaml
interface FileContent {
  name: string;
  content: string;
}

const files: FileContent[] = [
  { name: 'README.md', content: '# Welcome to the Impro.AI puzzle\nFollow instructions carefully.' },
  { name: 'Workload.yaml', content: 'task: Fix bugs, write TypeScript, push to GitHub' }
];

// Function to display file contents
function showFiles(files: FileContent[]) {
  files.forEach(file => {
    console.log(`--- ${file.name} ---`);
    console.log(file.content);
    console.log('-----------------\n');
  });
}

// Init function as hinted in posting
function Init() {
  console.log('Initializing Impro.AI puzzle solution...');
  showFiles(files);
  console.log('Puzzle processing complete ✅');
}

// Call Init to start
Init();
