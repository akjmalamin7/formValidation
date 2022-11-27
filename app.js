let signInForm = document.getElementById("signInForm");
let passwordField = document.getElementById("signInInputPassword");
passwordField.addEventListener("input", function(e){
  console.log(e.target.type)
    if (e.target.type === 'password') {
        if (e.target.value.length >= 8) {
            document.getElementById("passwordErrorMessage").innerHTML = ""
        } else {
            
            if(e.target.value.length <= 0){
                console.log(1)
                document.getElementById("passwordErrorMessage").innerHTML = `Password required`
            } else if(e.target.value.length < 7){
                document.getElementById("passwordErrorMessage").innerHTML = `Password must be 8 characters`
            }
        }
    }
});

signInForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = {};
    let emptyError = {};
    ;[...this.elements].forEach((el, index) => {
        if (el.type !== "submit") {
            !el.value && (emptyError[el.name] = el.getAttribute("data-error"))
            formData[el.name] = el.value;
        }
        el.addEventListener("input", function (e) {
            if (el.type === 'email') {
                if (el.value.length > 0) {
                    document.getElementById(emptyError[el.type]).innerHTML = ""
                } else {
                    document.getElementById(emptyError[el.type]).innerHTML = `${el.type} required`
                }
            } else if (el.type === 'password') {
                if (el.value.length >= 8) {
                    document.getElementById(emptyError[el.type]).innerHTML = ""
                } else {
                    if(el.value.length <= 0){
                        document.getElementById(emptyError[el.type]).innerHTML = `${el.type} required`
                    } else if(el.value.length < 7){
                        document.getElementById(emptyError[el.type]).innerHTML = `${el.type} must be 8 characters`
                    }
                }
            }
        });
    });
    let flag = false;
    if (emptyError["email"]) {
        document.getElementById(emptyError["email"]).innerHTML = "email required"
        flag = true;
    }
    if (emptyError["password"]) {
        document.getElementById(emptyError["password"]).innerHTML = "password required"
        !flag && (flag = true)
    }
    if (flag) return
    apiCall(formData)
});
const apiCall = (formData) => {
    console.log(formData)
    alert("Success");
    clearTimeout(()=>{
        alert("Success");
    }, 1000)
}

let eyeIconWrapper = document.getElementsByClassName("password_hide_icon");
function isShowPassword() {
    ;[...eyeIconWrapper].forEach((iconWrapper, index) => {
        iconWrapper.addEventListener("click", function () {

            let inputElement = document.getElementById(iconWrapper.getAttribute("data-input"));
            if (inputElement.type === "password") {
                inputElement.type = "text";
                iconWrapper.classList.add("show");
            }
            else if (inputElement.type === "text") {
                inputElement.type = "password";
                iconWrapper.classList.remove("show");
            }

        });
    });
}
isShowPassword();