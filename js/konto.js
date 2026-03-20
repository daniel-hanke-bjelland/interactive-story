function opppretKonto() {

  let navn = document.getElementById("name_sign_up").value;
  let epost = document.getElementById("epost_sign_up").value;
  let nickname = document.getElementById("nickname_sign_up").value;
  let passord = document.getElementById("password_sign_up").value;

  if (navn !== "" && epost !== "" && nickname !== "" && passord !== "") {
    let bruker = {
      navn,
      epost,
      nickname,
      passord,
    };

    localStorage.setItem("bruker", JSON.stringify(bruker));

    window.location.replace("../html/historien.html");
  } else {
    document.getElementById("wrapper_4_out").innerHTML =
    `You must fill in all of the fields. Alredy have an acount? <a href="./Logg in.html" id="konto_link" >Sign in her</a>`;
  }
}

let user = JSON.parse(localStorage.getItem("bruker"));

function loggIn() {
  let navn = document.getElementById("name_sign_in").value;
  let passord = document.getElementById("password_sign_in").value;
  
//   console.log(navn,passord);
  
  if (navn === user.navn && passord === user.passord ) {
    console.log("DE ER LIKE");
    window.location.replace("../html/historien.html");
  } else {
    console.log("DE ER ULIKE");
    document.getElementById("wrapper_4_out").innerHTML =
    `The name and the pasword is not fiting each other. If you dont have an acount: <a href="./Opprett en konto.html" id="konto_link" >Sign up her</a>`;
  }
  
}