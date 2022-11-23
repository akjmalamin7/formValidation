
/*validation*/
let signInForm = document.getElementById("signInForm");
signInForm.addEventListener("submit",function(e){
    e.preventDefault();
    let formData = {};
    ;[...this.elements].forEach((el,index)=>{
        if(el.type !== "submit"){
            if(el.name === "email"){
                console.log("error email")

            }else{
                console.log("error pass")
            }
            formData[el.name] =  el.value;
         
        }
    });
    console.log(formData)
});



/*is show password*/
let eyeIconWrapper = document.getElementsByClassName("password_hide_icon");
function isShowPassword(){
    ;[...eyeIconWrapper].forEach((iconWrapper, index)=>{
        iconWrapper.addEventListener("click", function(){
           
            let inputElement = document.getElementById(iconWrapper.getAttribute("data-input"));
            if(inputElement.type === "password"){
                inputElement.type = "text";
                iconWrapper.classList.add("show");
            }
            else if(inputElement.type === "text"){
                inputElement.type = "password";
                iconWrapper.classList.remove("show");
            }
           
        });
    });
}
isShowPassword();