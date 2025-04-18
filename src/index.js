import './styles.css';

const form = document.getElementById('form');
const mailInput = document.getElementById('mail');
const titleInput = document.getElementById('title');
const textInput = document.getElementById('text-area');
const pictureInput = document.getElementById('pictures');
const fileInput = document.getElementById('files');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(mailInput.value, titleInput.value, textInput.value);
});
