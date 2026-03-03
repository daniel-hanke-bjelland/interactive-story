function opppretKonto() {
    // console.log("PRØVER Å OPPRETTE EN KONTO");

    let navn = document.getElementById("name_sign_up").value;
    // console.log(navn);
    
    let epost = document.getElementById("epost_sign_up").value;
    // console.log(epost);    
    
    let nickname = document.getElementById("nickname_sign_up").value;
    // console.log(nickname);

    let passord = document.getElementById("password_sign_up").value;
    // console.log(passord);

    if (navn !== "" && epost !== "" && nickname !== "" && passord !== "") {
        let bruker = {
            navn,
            epost,
            nickname,
            passord
        }
    
        // console.log(bruker);
    
        localStorage.setItem("bruker",JSON.stringify(bruker));

        // window.URL(/html/historien.html);

        // window.location.replace.URL(/html/historien.html);

        window.location.replace("../html/historien.html");

    } else {
        // console.log("DU MÅ FYLLE UT ALT");
        document.getElementById("wrapper_4_out").innerHTML = "You must fill in all of the fields."
    }
}

