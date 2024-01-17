
/* *** Det her er til blog billede karousellen **
**********references *******************
 video: https://www.youtube.com/watch?v=9HcxHDS2w1s  */

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => { //forEach starter et loop over de to knapper0
  button.addEventListener("click", () => { /*knappen reagere på klik */
    const offset = button.dataset.carouselButton === "next" ? 1 : -1; /*Datasæt vælger begge buttons med dataattribute
    Hvis nogle af carouselbuttons er lig med "next", så skal den give value 1 tilbage ellers skal den give value -1 tilbage for så står der prev(ious).*/

    const slides = button.closest("[data-carousel]").querySelector('[data-slides]'); /*definere den tætteste parentelement fra knappen, som er en carousel
    (Derfor har div'en i html fået data-carousel og slidesne har fået data-slides*/

    const activeSlide = slides.querySelector("[data-active]"); //definere det første slide

    let newIndex = [...slides.children].indexOf(activeSlide) + offset; /*variablen laver et nyt index for det næste slide ud fra, 
    hvilket nummer i indekset, det allerede er på og om offset skal lægge en til eller fra*/

    if (newIndex < 0) newIndex = slides.children.length - 1; /*Når man er på det første billede og trykker "tilbage" skifter den, til det sidste billede i html*/
    if (newIndex >= slides.children.length) newIndex = 0; /*Når man skifter videre ved det sidste billede, går den tilbage til det første billede */

    slides.children[newIndex].dataset.active = true /*Linjen tilføjer data-attributen til det næste slide i Arrayen*/
    delete activeSlide.dataset.active /* Den her linje fjerner data-attributen fra det foregående slide*/

  });
});

 
 
 
 // ------det her er til burgeren ------ //
 
 /* ******* references  ************
 JavaScript 1 - ANKT - 23-08-2023
 og Nippon UX / UI gruppeprojekt */
 
 // Vælg elementer med klasserne 'hamburger' og 'mobile-nav'
 const menu_btn = document.querySelector('.hamburger');
 const mobile_menu = document.querySelector('.mobile-nav');
 
 // Tilføj en klik-eventlistener til 'hamburger'-elementet
 menu_btn.addEventListener('click', function(){
     // Skift tilstanden af klassen 'is-active' på 'hamburger'-elementet
     menu_btn.classList.toggle('is-active');
     
     // Skift tilstanden af klassen 'is-active' på 'mobile-nav'-elementet
     mobile_menu.classList.toggle('is-active');
 });
 
 // Variabel til at gemme den nuværende sektion (den initialiseres som en tom streng)
 let currentSection = "";
 
 
 // Tilføj en klik-eventlistener til lukning af mobilmenuen ved klik udenfor
 document.addEventListener('click', function (event) {
     const isMenuOpen = mobile_menu.classList.contains('is-active');
     const isClickInsideMenu = mobile_menu.contains(event.target);
     const isClickOnHamburger = menu_btn.contains(event.target);
 
     if (isMenuOpen && !isClickInsideMenu && !isClickOnHamburger) {
         // Luk mobilmenuen
         menu_btn.classList.remove('is-active');
         mobile_menu.classList.remove('is-active');
     }
 });
 


/* og til accordian funktionen inden i burgeren 
**** references *******
w3schools: https://www.w3schools.com/howto/howto_js_accordion.asp */

// vælg alle elements med class "accordion"
var acc = document.getElementsByClassName("accordion");
var i;

// tilføj en click event listener til hvert accordion element
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // skift til "active" class
    this.classList.toggle("active");

    // hent det næste sibling element (den næste i rækken)
    var panel = this.nextElementSibling;

    // Toggle the display of the panel
    if (panel.style.display === "flex" || panel.style.display === "") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });

  // Skjul panelet ved start
  acc[i].nextElementSibling.style.display = "none";
}


 
 /* ------- det her er til drop down --------------- 
 *************** references ***************
 w3schools: https://www.w3schools.com/howto/howto_js_dropdown.asp 
 */
 
  // Function to toggle dropdown visibility
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    var allDropdowns = document.getElementsByClassName("dropdown-content");

    // Close all other dropdowns
    for (var i = 0; i < allDropdowns.length; i++) {
        var otherDropdown = allDropdowns[i];
        if (otherDropdown.id !== dropdownId && otherDropdown.classList.contains('show')) {
            otherDropdown.classList.remove('show');
        }
    }

    // Toggle the clicked dropdown
    if (dropdown) {
        dropdown.classList.toggle("show");
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
 
 
 
 /* det her er til billedkunstsiden, den del med grid.
 reference: https://www.w3schools.com/howto/howto_css_modal_images.asp */

// Funktion til at åbne modal med det angivne billede
function openModal(imageSrc) {
    // Hent modal-elementet og billedet i modalen
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");

    // Vis modalen
    modal.style.display = "block";
    // Indstil kilden til billedet i modalen
    modalImage.src = imageSrc;
}

// Funktion til at lukke modalen
function closeModal() {
    // Hent modal-elementet
    var modal = document.getElementById("myModal");
    // Skjul modalen
    modal.style.display = "none";
}

// Luk modalen, hvis der klikkes uden for billedet
window.onclick = function(event) {
    // Hent modal-elementet
    var modal = document.getElementById("myModal");
    // Luk modalen, hvis det man klikker på er inde i "modalen"
    if (event.target == modal) {
        closeModal();
    }
}
 
 
 /* det her er til de andre linjefagssider - primært musik
 reference: Andreas, undervisning -->
 JavaScript 4 - ANKT - 01-09-2023 & 
 Programmering 6 - ANKT - 13-10-2023 */

 
// Variabler for billedegallery med pile-knapper. 
//hvet af variabler henter et element i html ud fra id - fx. musik1
const musik1 = document.getElementById("musik1");  
const musik2 = document.getElementById("musik2");  
const musik3 = document.getElementById("musik3");  
const hoejrePil = document.getElementById("hoejrePil");  
const venstrePil = document.getElementById("venstrePil"); 

// det her opretter et array med billederne i karusellen
const carousel = [musik1, musik2, musik3];  
 // Iog her initialiseres en variabel for det aktuelle billede (indeks i arrayet)
let currentImageIndex = 0; 
// værdien er 0 fordi array altid starter fra 0, så det er det første billede

// her vises det første billede ved at ændre dets display-stil til "block" som gør det synligt
musik1.style.display = "block"; 
// og de to andre billeder skjules ved at ændre deres display til none. 
musik2.style.display = "none";  
musik3.style.display = "none";

// her bruger vi evenlistener til at lytte efter et klik på højre eller venstre pil,
// og ud fra det så bliver der en tilsvarende function. functionerne er nedenunder. 
hoejrePil.addEventListener("click", naesteBillede);  
venstrePil.addEventListener("click", forrigeBillede);  

// det her er en function til at vise det næste billede
function naesteBillede() {
    // her skjules det aktuelle billede
    carousel[currentImageIndex].style.display = "none";  
    // så opdateres indekset til det næste billede ved at sige nuværende billede index og plus en. 
    currentImageIndex = (currentImageIndex + 1) % carousel.length;  
    // og her vises det nye/ næste billede
    carousel[currentImageIndex].style.display = "block";  
}

// her er funktionen til at vise det forrige billede, samme princip som ovenover
function forrigeBillede() {
    // aktuelle billede bliver skjult
    carousel[currentImageIndex].style.display = "none";  
    // array bliver opdateret = nuværende billede minus 1 billede. 
    currentImageIndex = (currentImageIndex - 1 + carousel.length) % carousel.length;  
    // og det nye/ forrige billede vises
    carousel[currentImageIndex].style.display = "block";  
}


// men det er ikke nok bare at have en manuel skfit af billederne, så her er der en auto funktion. 
// først startes en timer til automatisk skift af billederne. 
const timer = window.setInterval(naesteBillede, 9000);  // 9000 = 9 sekunder, så folk har en chance for at læse teksten. 


// og her er endnu en funktion til at skifte billederne, hvis man fx ikke har en mus
// først en evenlistener som lytter til om en knap - altså tastatur knap - er trykket på. 
document.addEventListener("keydown", function (event) { 
    if (event.key === "ArrowLeft") {
        // hvis venstre piletast er blevet trykket, så udføres forrigeBillede-funktionen.
        forrigeBillede();  
    } else if (event.key === "ArrowRight") {
        // og modsat hvis højre piletast er trykket, så udføres næsteBillede-funktionen. 
        naesteBillede();  
    }
});


/* ----------- her er til bekræft siden ------
************ men det virker ikke and we don't know why *************  

   // Variabel til at gemme den valgte dato
   var selectedDate = null;

   // Funktion til at håndtere valg af dato
   function selectDate(date) {
       // Opdater den valgte datovariabel
       selectedDate = date;

       // Vis den valgte dato
       updateSelectedDateText();
   }

   // Funktion til at opdatere den viste valgte dato
   function updateSelectedDateText() {
       // Hent elementet, hvor vi vil vise den valgte dato
       var selectedDateTextElement = document.getElementById("selectedDateText");

       // Opdater indholdet af elementet med den valgte dato
       selectedDateTextElement.innerHTML = "Valgt Dato: " + (selectedDate ? selectedDate : "Ingen");
   }


   function skiftSektion() {
    var sektion1 = document.getElementById('sektion1');
    var sektion2 = document.getElementById('sektion2');

    if (sektion1.style.display !== 'none') {
      sektion1.style.display = 'none';
      sektion2.style.display = 'block';
    } else {
      sektion1.style.display = 'block';
      sektion2.style.display = 'none';
    }
  }


/*
//bekræft show up -- virker ikke :'(
    const bekraeftShowUp = getElementById("bekraeftshowup");
    const blanketInfo = getElementById("blanketinfo");
    const tilmeldingsForm = getElementById("tilmeldingsform");
    const sendTilmelding = getElementById("sendtilmelding");
    
    sendTilmelding.addEventListener("click", visBekraeftelse )
    function visBekraeftelse(){
        blanketInfo.style.display = "none";
        tilmeldingsForm.style.display = "none";
        bekraeftShowUp.style.display = "block";
    
        const besoegsdatoValue = getElementsByName("besoesdato");
        let valgtDato = "";

            //chatgbt har lavet resten 

        for (let i = 0; i < besoegsdatoValue.length; i++) { //et loop 
            if (besoegsdatoValue[i].checked) {
                valgtDato = besoegsdatoValue[i].value;
                break;
            }
        }
        // Opdater teksten i bekraeftshowup h3-elementet
        bekraeftShowUp.querySelector("h3.gul").innerText = `Vi glæder os til at se jer d. ${valgtDato}`;
    }
 */    
    /* *******fra chatgbt til bekræfthalløj
    const bekraeftShowUp = document.getElementById("bekraeftshowup");
    const blanketInfo = document.getElementById("blanketinfo");
    const tilmeldingsForm = document.getElementById("tilmeldingsform");
    const sendTilmelding = document.getElementById("sendtilmelding");
    
    sendTilmelding.addEventListener("click", visBekraeftelse);
    
    function visBekraeftelse() {
        // Skjul blanketInfo og tilmeldingsForm
        blanketInfo.style.display = "none";
        tilmeldingsForm.style.display = "none";
    
        // Find den valgte besøgsdato
        const besoegsDatoElements = document.getElementsByName("besoesdato");
        let valgtDato = "";
        for (let i = 0; i < besoegsDatoElements.length; i++) {
            if (besoegsDatoElements[i].checked) {
                valgtDato = besoegsDatoElements[i].value;
                break;
            }
        }
    
        // Opdater teksten i bekraeftshowup h3-elementet
        bekraeftShowUp.querySelector("h3.gul").innerText = `Vi glæder os til at se jer d. ${valgtDato}`;
    
        // Vis bekraeftShowUp
        bekraeftShowUp.style.display = "block";
    }*/
    
