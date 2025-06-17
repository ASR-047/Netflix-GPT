export const checkValidateData = (name,email,password,phone,isSignIn) =>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";

    if (!isSignIn) {
    const isNameValid = /^[A-Za-z ]{3,30}$/.test(name);
    const isPhoneValid = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(phone);

    if (!isNameValid) return "Name is not valid";
    if (!isPhoneValid) return "Phone number is not valid";
  }
    

    return null;
}