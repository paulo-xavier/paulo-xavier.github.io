const imageContainer = document.querySelectorAll('#image-container'); 

const dialogWeather = document.getElementById('dialog-weather'); 
const dialogBahSocorro = document.getElementById('dialog-bahsocorro'); 
const dialogRagnarok = document.getElementById('dialog-ragnarok'); 
const dialogNotificationsPage = document.getElementById('dialog-notifications-page'); 

const dialogContainerButton = document.querySelectorAll('#dialog-container-button'); 

let dialogIsOpen = false; 

imageContainer.forEach((image, index) => image.addEventListener ('click' , () =>  {
        if (dialogIsOpen == false) {

            if (index == 0 ) {
                dialogWeather.open = true; 
                dialogIsOpen = true; 
            
            } else if (index == 1) {
                dialogBahSocorro.open = true; 
                dialogIsOpen = true; 
            
            } else if (index == 2) {
                dialogRagnarok.open = true;
                dialogIsOpen = true; 
            
            } else if (index == 3) {
                dialogNotificationsPage.open = true; 
                dialogIsOpen = true; 
            } 

        } 

})); 

dialogContainerButton.forEach((dialog, index) => dialog.addEventListener('click', () => {
        if (index == 0){
            dialogWeather.open = false; 
            dialogIsOpen = false; 

        } else if (index == 1) {
            dialogBahSocorro.open = false; 
            dialogIsOpen = false; 
        
        } else if (index == 2) {
            dialogRagnarok.open = false; 
            dialogIsOpen = false; 
        
        } else if (index == 3) {
            dialogNotificationsPage.open = false; 
            dialogIsOpen = false; 
        }
})); 

