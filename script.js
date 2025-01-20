document.getElementById('readFiles').addEventListener('click', async () => {
  const fileInput = document.getElementById('fileInput');
  const files = fileInput.files;

  if (files.length !== 5) {
    console.error('Please select exactly 5 text files.');
    alert('Please select exactly 5 text files.');
    return;
  }

  const filePromises = Array.from(files).map((file, index) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        console.log(`File ${index + 1}: ${reader.result}`);
        resolve();
      };

      reader.onerror = () => {
        console.error(`Error reading file ${file.name}`);
        reject();
      };

      reader.readAsText(file);
    });
  });

  try {
    await Promise.all(filePromises);
    console.log('All files have been read and logged.');
  } catch (error) {
    console.error('An error occurred while reading files:', error);
  }
});


// do not change the code above
// add your code here
