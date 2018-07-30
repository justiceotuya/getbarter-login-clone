//loading the select box with data
let country = document.getElementById("country");
let number = document.getElementById("number-prefix");
let loginLink = document.getElementById("login-link");
let registerLink = document.getElementById("register-link");
let loginForm = document.getElementById("login-form");
let registerForm = document.getElementById("register-form");
let registerBtn = document.getElementById("registerBtn");
let regInput = document.getElementsByClassName("reg-input");
let form = document.querySelector("form");

//clcik on login link, displays login form and hides register form

const registerClickDisplay = () => {
  registerForm.className = "show";
  loginForm.className = "remove";
  registerLink.style.borderBottom = "1px solid #3c52dd";
  loginLink.style.borderBottom = "1px solid rgba(0, 0, 0, .1)";
};

const loginClickDisplay = () => {
  loginForm.className = "show";
  registerForm.className = "remove";
  loginLink.style.borderBottom = "1px solid #3c52dd";
  registerLink.style.borderBottom = "1px solid rgba(0, 0, 0, .1)";
};
//click on register link, shows register form and hides login form
registerLink.addEventListener("click", function() {
  if ((registerForm.className = "remove")) {
    registerClickDisplay();
  } else {
    registerClickDisplay();
  }
});

loginLink.addEventListener("click", function() {
  if ((loginForm.className = "remove")) {
    loginClickDisplay();
  } else {
    loginClickDisplay();
  }
});

//get country info data via the fetch api
fetch(
  "https://gist.githubusercontent.com/DmytroLisitsyn/1c31186e5b66f1d6c52da6b5c70b12ad/raw/b08535cdbb5069583f7438cb878a81bf138ebd2b/country_dial_info.json"
)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    myJson.forEach(function(data) {
      country.options[country.options.length] = new Option(
        data.name,
        data.name
      );

      number.options[number.options.length] = new Option(
        data.flag + data.dial_code,
        data.name
      );
    });
  });

form.addEventListener("submit", function() {
  setTimeout(() => {
    alert("Registered");
  }, 1000);
});
