document.getElementById('img-input-form').onchange = function(event){
    document.getElementById('avatar').innerHTML = `
    <img src=${URL.createObjectURL(event.target.files[0])} width="100%" />
    <p>Preview</p>
    <p>Uploading....</p>
    `
    document.getElementById("profile-form").submit();
};