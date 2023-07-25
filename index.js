const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const emailError = document.getElementById("emailError");
const countryError = document.getElementById("countryError");
const zipCodeError = document.getElementById("zipCodeError");

// -----------Validate the email-------------
const emailInput = document.getElementById("email");
emailInput.addEventListener("blur", validateEmail);

function validateEmail() {
    const email = emailInput.value;
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegExp.test(email);
    const emailError = document.getElementById("emailError");

    if (isValid) {
        if (isValid) {
            emailError.textContent = "";
        }
        emailError.textContent = "Valid email!";
        emailError.classList.remove("invalid");
        emailError.classList.add("valid");
    } else {
        emailError.textContent = "Please provide a valid email!";
        emailError.classList.remove("valid");
        emailError.classList.add("invalid");
    }
}


//---------Validate the country-code-----------
const validCountries = [
    "united states",
    "canada",
    "united kingdom",
    "germany",
    "france",
    "spain",
    "italy",
    "russia",
    "china",
    "japan",
    "india",
    "brazil",
    "australia",
    "south korea",
    "mexico",
    "south africa",
    "egypt",
    "nigeria",
    "saudi arabia",
    "united arab emirates",
    "turkey",
    "israel",
    "argentina",
    "chile",
    "new zealand",
    "singapore",
    "thailand",
    "indonesia",
    "pakistan",
    "bangladesh",
    "vietnam",
    "philippines",
    "iran",
    "iraq",
    "afghanistan",
    "kenya",
    "morocco",
    "ghana",
    "ukraine",
    "poland",
    "netherlands",
    "switzerland",
    "sweden",
    "norway",
    "denmark",
    "finland",
    "austria",
    "belgium",
    "portugal",
    "greece",
    "czech republic",
    "hungary",
    "romania",
    "bulgaria",
    "serbia",
    "croatia",
    "mexico",
    "peru",
    "colombia",
    "venezuela",
    "ecuador",
    "bolivia",
    "paraguay",
    "uruguay",
    "panama",
    "costa rica",
    "nicaragua",
    "canada",
    "australia",
    "new zealand",
    "fiji",
    "papua new guinea",
    "solomon islands",
    "samoa",
    "tonga",
    "tuvalu",
    "kiribati",
    "palau",
    "nauru",
    "marshall islands",
    "micronesia",
    "cook islands",
    "vanuatu",
    "comoros",
    "mauritius",
    "seychelles",
    "madagascar",
    "mozambique",
    "zimbabwe",
    "namibia",
    "botswana",
    "lesotho",
    "swaziland",
    "mali",
    "senegal",
    "côte d'ivoire",
    "burkina faso",
    "benin",
    "togo",
    "niger",
    "cameroon",
    "gambia",
    "sierra leone",
    "liberia",
    "guinea",
    "guinea-bissau",
    "chad",
    "central african republic",
    "mauritania",
    "djibouti",
    "somalia",
    "ethiopia",
    "eritrea",
    "south sudan",
    "sudan",
    "libya",
    "tunisia",
    "algeria",
    "lebanon",
    "jordan",
    "kuwait",
    "bahrain",
    "qatar",
    "oman",
    "yemen",
];

function validateCountry() {
    const countryInput = document.getElementById("country");
    const countryError = document.getElementById("countryError");
    const enteredCountry = countryInput.value.trim();


    if (validCountries.includes(enteredCountry)) {
        countryError.classList.add("valid");
        countryError.textContent = "Perfect";
    } else {
        countryError.classList.add("invalid");
        countryError.textContent = "Please enter a valid country.";
    }
}
const countryInput = document.getElementById("country");
countryInput.addEventListener("blur", validateCountry);



//------------Validate the ZIPCODE-------------
function validateZipCode() {
    const zipCodeInput = document.getElementById("zipCode");
    const zipCodeError = document.getElementById("zipCodeError");
    const zipCodePattern = /^\d{5}$/; // 5-digit numeric zip code pattern

    const zipCode = zipCodeInput.value.trim();

    if (zipCodePattern.test(zipCode)) {
        zipCodeError.classList.remove("invalid");
        zipCodeError.classList.add("valid");
        zipCodeError.textContent = "Great job!";
    } else {
        zipCodeError.classList.add("invalid");
        zipCodeError.textContent = "Please enter a valid 5-digit zip code. Eg: XXXXXX";
    }
}
const zipCodeInput = document.getElementById("zipCode");
zipCodeInput.addEventListener("input", validateZipCode);


//--------------Validate the password------------
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");

confirmPasswordInput.addEventListener("input", checkPasswordMatch);

function checkPasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        passwordError.textContent = "Passwords match!";
        passwordError.classList.remove("invalid");
        passwordError.classList.add("valid");
    } else {
        passwordError.textContent = "Passwords do not match!";
        passwordError.classList.remove("valid");
        passwordError.classList.add("invalid");
    }
}

//--------------Submit the sign and show the cats page-------------------
const form = document.querySelector(".form-page");
const carousel = document.querySelector(".carousel");
const stopNav = document.querySelector(".stop-start-navigation");
stopNav.classList.add("hide");
carousel.classList.add("hide");

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", showCatsPage);

function showCatsPage() {
    validateEmail();
    validateCountry();
    validateZipCode();

    const validationErrors = document.querySelectorAll(".invalid");
    if (validationErrors.length > 0) {
        // If there are validation errors, prevent form submission
        return;
    }

    form.classList.add("hide");
    carousel.classList.remove("hide");
    carousel.classList.add("show");
    stopNav.classList.remove("hide");
    stopNav.classList.add("show");

}


//---------------Image-carousel--------------------
document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".carousel img");
    const arrows = document.querySelectorAll(".arrow");
    const navigation = document.querySelector(".navigation");

    let currentIndex = 0;
    let timer;

    // Show the current slide
    function showSlide(index) {
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;

        // Update navigation circles
        const circles = document.querySelectorAll(".circle");
        circles.forEach((circle, i) => {
            circle.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex);
    }

    // Create navigation circles based on the number of slides
    for (let i = 0; i < images.length; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.addEventListener("click", () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
        navigation.appendChild(circle);
    }

    // Set the initial active state for the first circle
    document.querySelector(".circle").classList.add("active");

    arrows[0].addEventListener("click", prevSlide);
    arrows[1].addEventListener("click", nextSlide);

    function startCarousel() {
        timer = setInterval(nextSlide, 5000);
    }


    // Stop and start the automatic carousel
    function stopCarousel() {
        clearInterval(timer);
    }
    const stop = document.querySelector(".stop");
    stop.addEventListener("click", function () {
        stopCarousel()
        stop.classList.add("stop-color");
        play.classList.remove("play-color")
    });

    const play = document.querySelector(".play");
    play.classList.add("play-color");
    play.addEventListener("click", function () {
        play.classList.add("play-color");
        stop.classList.remove("stop-color")
        startCarousel();
    });



    // Start the automatic carousel
    startCarousel();
});
