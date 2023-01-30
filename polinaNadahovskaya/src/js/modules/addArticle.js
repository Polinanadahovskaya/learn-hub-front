const form = document.querySelector('.form');
const fileInput = document.getElementById('upload-file-input');

const readFileAsync = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
};

const addNewArticle = () => {
  form.addEventListener('submit', async (e) => {
    try {
      const formObj = Object.fromEntries(new FormData(e.target));
      const file = fileInput.files[0];
      const base64 = file
        ? await readFileAsync(file)
        : 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

      fetch('http://localhost:3000/article/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formObj, pic: base64 }),
      });
    } catch (err) {
      console.error(err);
    }
  });
};

export default addNewArticle;
