const imageContainer = document.querySelectorAll('#image-container'); 

const dialogWeather = document.getElementById('dialog-weather'); 
const dialogBahSocorro = document.getElementById('dialog-bahsocorro'); 

const dialogContainerButton = document.querySelectorAll('#dialog-container-button'); 


let dialogIsClose = false; 


imageContainer.forEach((image, index) => image.addEventListener ('click' , () =>  {
        if (dialogIsClose == false) {

            if (index == 0 ) {
                dialogWeather.open = true; 
                dialogIsClose = true; 
            
            } else if (index == 1) {
                dialogBahSocorro.open = true; 
                dialogIsClose = true; 
            }

        } 

})); 

dialogContainerButton.forEach((dialog, index) => dialog.addEventListener('click', () => {
        if (index == 0){
            dialogWeather.open = false; 
            dialogIsClose = false; 

        } else if (index == 1) {
            dialogBahSocorro.open = false; 
            dialogIsClose = false; 
        }
})); 

