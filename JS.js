function validate(){
    let nickname=document.getElementById("nickname").value
    let fullname=document.getElementById("fullname").value
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let alamat=document.getElementById("alamat").value
    let check=document.getElementById("check").checked

    if(nickname == ""){
        return showerror("Nama pengguna harus diisi")
    }else if(fullname == ""){
        return showerror("Nama lengkap pengguna harus diisi")
    }else if(email.indexof("@") == "-1"){
        return showerror("email pengguna harus berisi '@'")
    }else if(!email.endsWith(".com")){
        return showerror("Email pengguna harus diakhiri dengan '.com'")
    }else if(password.length < 3 || password.length > 12){
        return showerror("Kata sandi pengguna harus 3 - 12 karakter")
    }else if(alamat == ""){
        return showerror("alamat pengguna harus diisi")
    }else if(!check){
        return showerror(" Pengguna harus menyetujui syarat dan ketentuan")
    }
}
let error = document.getElementById("error")
function showerror(massage){
    error.innerHTML=massage
    return false
}