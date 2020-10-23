const imageInput = document.getElementById('image_input');
const redirectURLInput = document.getElementById('redirect_url_input');
const codeTextarea = document.getElementById('code_textarea');

function handleSubmit() {
  const code = `
<div style="width: 100%">
  <a href="${redirectURLInput.value}" target="_blank">
    <img src="${imageInput.value}" style="width: 100%" />
  </a>
</div>
  `;

  codeTextarea.value = code;
}