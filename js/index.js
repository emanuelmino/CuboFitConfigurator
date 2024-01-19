// script.js

/**
 * La lógica para mostrar u ocultar imágenes dado un input específico es la misma para checkboxes y radio,
 * así que no hacemos diferencia y los tratamos por igual.
 **/
function updateImageForInput(input) {
    const targetImageId = input.getAttribute("data-image");
    const targetImage = document.getElementById(targetImageId);
    if(input.checked) {
        targetImage.style.display = "block";
    } else {
        targetImage.style.display = "none";
    }
}

/**
 * En los radio buttons, el atributo name determina cuáles son los otros radios del grupo.
 * Solamente un radio button del grupo puede estar checked. Acá lo que hacemos es que cuando
 * un radio button es chequeado, revisamos todos los otros radios que estén en el mismo grupo
 * y actualizamos las imágenes para esos también.
 **/
function checkRadio(radioButton) {
    const targetGroup = radioButton.getAttribute("name");
    const inputsInGroup = document.querySelectorAll('input[name="' + targetGroup + '"]');
    inputsInGroup.forEach(updateImageForInput);
}

document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.radio-toolbar input');
    inputs.forEach(input => {
        updateImageForInput(input); // <- Muestra imágenes con inputs que ya estén checked by default
        input.addEventListener('change', () => {
            if(input.getAttribute("type") == "radio") {
                checkRadio(input);
            } else {
                updateImageForInput(input);
            }
        });
    });
});
