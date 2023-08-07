const fs = require('fs').promises;

async function readFilesAsync() {
  try {
    const textData = await fs.readFile('textfile.txt', 'utf-8');
    const htmlData = await fs.readFile('index.html', 'utf-8');
    const jsonData = await fs.readFile('user1.json', 'utf-8');

    console.log('Text File Content:\n');
    console.log(textData);

    console.log('\nHTML File Content:\n');
    console.log(htmlData);

    console.log('\nJSON File Content:\n');
    console.log(JSON.parse(jsonData));
  } catch (error) {
    console.error('Error reading files:', error);
  }
}

readFilesAsync();
