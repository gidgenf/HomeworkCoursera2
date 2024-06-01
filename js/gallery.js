/*Name this external file gallery.js*/
function upDate(previewPic) {
    console.log("the event is triggering " + previewPic.src + " " + previewPic.alt);
    let image = document.getElementById("image");
    image.style.backgroundImage = `url(${previewPic.src})`;
    image.alt = previewPic.alt;
    console.log("image alt now is:" + `${image.alt}` + " ,also the background image was changed");
    image.textContent = previewPic.alt;


    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
    */

}

function unDo() {

    let image = document.getElementById("image");
    image.style.backgroundImage = `url('')`;
    image.textContent = " Hover over an image below to display here.";

    /* In this function you should 
   1) Update the url for the background image of the div with the id = "image" 
   back to the orginal-image.  You can use the css code to see what that original URL was
   
   2) Change the text  of the div with the id = "image" 
   back to the original text.  You can use the html code to see what that original text was
   */
}

function addTabIndex() {
    let images = document.getElementsByClassName("preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", i + 1);
        console.log("Coffe " + `${[i + 1]} ` + "alt is: " + images[i].getAttribute("tabindex"));
    }
}

window.onload = function () {
    addTabIndex();
};
