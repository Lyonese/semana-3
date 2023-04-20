function handleSubmit(event) {
    event.preventDefault(); // 🍌 Debemos prevenir el comportamiento por defecto del envío de la información al servidor.
    console.log("Hola mundo");
}
    
const $form =document.querySelector("form");
$form.addEventListener("submit", handleSubmit);