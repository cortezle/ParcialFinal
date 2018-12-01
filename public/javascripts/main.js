document.form.crud = addEventListener("submit",function(e){
    e.preventDefault();
    var data = {
        marca: document.querySelector('#marca'),
        modelo: document.querySelector('#modelo'),
        anio: document.querySelector('#anio')
    }
    console.log("im hrer");
});