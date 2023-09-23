function validate(){
    let EmailID = document.getElementById("txtEmail").value
    let AdexID = document.getElementById("txtUsername").value
    let Password = document.getElementById("txtPassword").value
    let Country = document.getElementById("dropCountry").value
    let Date = document.getElementById("date").value
    let Month = document.getElementById("month").value
    let Year = document.getElementById("year").value


   
   if(EmailID.indexOf("@") == -1){
        return showError("Email must contains @")
    }else if(EmailID == ""){
        return showError("Email can't be empty")
    }else if(!EmailID.endsWith(".com")){
        return showError("User email must end with .com")
    }else if(AdexID.lenght < 3 || AdexID > 6){
        return showError("ID must consist of 3-6 letters")
    }else if(AdexID == ""){
        return showError("Adex can't be empty")
    }else if(Password.lenght < 4 || Password > 12){
        return showError("Password must consist of 4 - 12")
    }else if(Password.indexOf("@")|| Password.indexOf("#") ||Password.indexOf("$")||Password.indexOf("^")){
        return showError("Password must consist of special characters")
    }else if(Country == "-1"){
        return showError("Choose Your Country/Region")
    }else if(Date == "-1"){
        return showError("Choose you birth date")
    }else if(Month == "-1"){
        return showError("Choose your birth month")
    }else if(Year == "-1"){
        return showError("Choose your birth year")
    }
}
let error = document.getElementById("error")
function showError(pesan){
    error.innerHTML = pesan
    return false
}