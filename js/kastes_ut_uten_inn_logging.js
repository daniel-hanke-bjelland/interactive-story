let user2 = JSON.parse(localStorage.getItem("bruker"));

if (!user2) {
  // console.log("IKKE BRA")
  
  window.location.replace("../html/Opprett en konto.html");
}