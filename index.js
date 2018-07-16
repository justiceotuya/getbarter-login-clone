//loading the select box with data
var country = document.getElementById("country");
var number = document.getElementById("number-prefix");
var loginLink = document.getElementById("login-link");
var registerLink = document.getElementById("register-link");
var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");

//clcik on login link, displays login form and hides register form
loginLink.addEventListener("click", function () {
  if ((loginForm.className = "remove")) {
    loginClickDisplay();
  } else {
    loginClickDisplay();
  }
});


function loginClickDisplay() {
  loginForm.className = "show";
  registerForm.className = "remove";
  loginLink.style.borderBottom = "1px solid #3c52dd";
  registerLink.style.borderBottom = "1px solid rgba(0, 0, 0, .1)";
}

function registerClickDisplay() {
  registerForm.className = "show";
  loginForm.className = "remove";
  registerLink.style.borderBottom = "1px solid #3c52dd";
  loginLink.style.borderBottom = "1px solid rgba(0, 0, 0, .1)";
}


//click on register link, shows register form and hides login form
registerLink.addEventListener("click", function () {
  if ((registerForm.className = "remove")) {
    registerClickDisplay();
  } else {
    registerClickDisplay();
  }
});

//get country info data via the fetch api
fetch(
    "https://gist.githubusercontent.com/DmytroLisitsyn/1c31186e5b66f1d6c52da6b5c70b12ad/raw/b08535cdbb5069583f7438cb878a81bf138ebd2b/country_dial_info.json"
  )
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    myJson.forEach(function (data) {
      country.options[country.options.length] = new Option(
        data.name, data.name
      );

      // country.push("<option value='" + data.name + "'>");


      number.options[number.options.length] = new Option(
        data.flag + data.dial_code,
        data.name
      );
    });
  });