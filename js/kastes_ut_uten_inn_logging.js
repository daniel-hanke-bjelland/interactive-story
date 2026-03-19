let user = JSON.parse(localStorage.getItem("bruker"));

if (!user) {
  // console.log("IKKE BRA")
  
  window.location.replace("../html/Opprett en konto.html");
}