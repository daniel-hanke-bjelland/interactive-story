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
      passord,
    };

    // console.log(bruker);

    localStorage.setItem("bruker", JSON.stringify(bruker));

    // window.URL(/html/historien.html);

    // window.location.replace.URL(/html/historien.html);

    window.location.replace("../html/historien.html");
  } else {
    // console.log("DU MÅ FYLLE UT ALT");
    document.getElementById("wrapper_4_out").innerHTML =
      "You must fill in all of the fields.";
  }
}

let usersName = JSON.parse(localStorage.getItem("bruker"));
console.log(usersName);

const historie = [
  {
    id: 1,
    image: "../img/hovedperson_går.png",
    // description: "Lorem ipsum",
    subtext: [
      {
        text: `Welcomme ${usersName.navn}!`,
        id: "nr_1",
        position: "center"
      },
      {
        text: "Your character's name is William, and he is 16 years old. He grew up in Manchester, but now lives in London.",
        id: "nr_2",
        position: "center"
      },
    ],
    thoughts: [],
    talk: [],
  },
  {
    id: 2,
    image: "../img/frieri.png",
    subtext: [
      {
        text: "William walks past a couple who are getting engaged. Ola Nordman!",
        id:"nr_1",
        position: "center"
      },
      {
        text: "William walks on.",
        id:"nr_5",
        position: "center"
      },
    ],
    thoughts: [
      {
        // position: "left",
        text: "What are they doing?",
        id:"nr_2",
        position:"left",
        person: "William"
      },
      {
        text: "Isn’t it just a ring?",
        id:"nr_3",
        position: "left",
        person: "William"
      },
      {
        text: "Is she crying?",
        id:"nr_4",
        position: "left",
        person: "William"
      },
    ],
    talk: [],
  },
  {
    id: 3,
    image: "../img/pa_benken_2.png",
    subtext: [
      {
        text: "After a short while, he sees a bench with a free space next to a girl. He sits down.",
        id:"nr_1",
        position: "center"
      },
    ],
    thoughts: [
      {
        text: "Finally, I can relax.",
        id:"nr_2",
        position: "left",
        person: "William"
      },
    ],
    talk: [],
  },
  {
    id: 4,
    image: "../img/pa_benken_3.png",
    subtext: [
      {
        text: "Suddenly, the person next to him starts to cry.",
        id:"nr_1",
        position: "center"
      },
    ],
    thoughts: [],
    talk: [
      {
        text: "Nobody likes me, and I can’t take it anymore.",
        id:"nr_2",
        position: "right",
        person: "Girl"
      },
    ],
  },
  {
    id: 5,
    image: "../img/pa_benken_3.png",
    subtext: [
      {
        text: "William thinks:",
        id:"nr_1",
        position: "center"
      },
    ],
    thoughts: [
      {
        text: "This reminds me of the time when I was three years old.",
        id:"nr_2",
        position: "left",
        person: "William"
      },
      {
        text: "The screams and the sirens will never disappear.",
        id:"nr_3",
        position: "left",
        person: "William"
      },
      {
        text: "Back then it was a splinter in the eye. Now it’s a log.",
        id:"nr_4",
        position: "left",
        person: "William"
      },
    ],
    talk: [],
  },
  {
    id: 6,
    image: "../img/pa_benken_3.png",
    subtext: [
      {
        text: "Choice: Should William try to comfort her?",
        id:"nr_1",
        position: "center"
      },
    ],
    thoughts: [],
    talk: [],
    choices: [
      {
        text: "yes",
        backgroundColor: "green",
        id:"nr_2"
      },
      {
        text: "no",
        backgroundColor: "red",
        id:"nr_3"
      },
    ],
  },
];

// console.log(historie[5]);

// let området = document.getElementById("right");

let historieOmrådet = document.getElementById("right");
let bildeOmrådet = document.getElementsByClassName("left")[0];

console.log(bildeOmrådet)








function marginStyle(element, type) {

 for (let i = 0; i < element.length; i++) {
  let marginStyle = "0 auto 0 0"; 

  if (element[i].position === "right") {
    marginStyle = "0 0 0 auto"; 
  } else if (element[i].position === "center") {
    marginStyle = "0 auto";
  }

  historieOmrådet.innerHTML += `
    <p class="${type}" data-person="${element[i].person}" id="${element[i].id}" style="margin: ${marginStyle};">
      ${element[i].text}
    </p>
  `;
}
}

function loadChoices(choices) {
  console.log("PRØVER Å LASTE INN VALG");

  historieOmrådet.innerHTML += `
  <div id="buttonAiria"></div>
  `;

  let knappOmmrådet = document.getElementById("buttonAiria");

  for (let i = 0; i < choices.length; i++) {

    knappOmmrådet.innerHTML += `
    <button class="${choices[i].text}" id="${choices[i].id} " >
    ${choices[i].text}
    </button>
    `;
    console.log("ETTER PRINTET UT, INNE I FOR");
    
    
  }
  console.log("ETTER FOR");
}

function loadImage(scene) {

  console.log("PRØVER Å LASTE INN BILDET");
  console.log(scene.image);

  bildeOmrådet.innerHTML = `<img id="bakgrunds_bilde" src="${scene.image}" alt="">`;
  // for (let i = 0; i < scene.length; i++) {

  //   console.log(`PRØVER Å PRINTE UT ${scene[i].image}`)

  //   bildeOmrådet.innerHTML = `<img id="bakgrunds_bilde" src="../img/Hovedperson går.png" alt="">`;
    
    
    
  // }


}


function loadScene(sceneNumber) {
  let scene = historie[sceneNumber];
  let subtext = scene.subtext;
  let thoughts = scene.thoughts;
  let talk = scene.talk;
  let choices = scene.choices;

  historieOmrådet.innerHTML = "";
  console.log("TØMT OMRÅDET");
  
  if (scene.subtext.length > 0) {
        marginStyle(subtext, "subtext")
    // loadSubText(subtext);
  } 
  // else {
  //   let i1 = document.getElementById("info_1");
  //   let i2 = document.getElementById("info_2");
  //   let i3 = document.getElementById("info_3");
    
  //   i1.innerHTML = "";
  //   i2.innerHTML = "";
  //   i3.innerHTML = "";
  // }
  
  if(scene.thoughts.length > 0) {
    // loadThoughts(thoughts)
    marginStyle(thoughts, "thoughts")
  } 
  
  if(scene.talk.length > 0) {
    // loadTalk(talk)
        marginStyle(talk, "talk")
  } 

  if(scene.image.length > 0) {
    loadImage(scene)
  }

  if (!scene.choices) {
    setTimeout(() => {
      loadScene(sceneNumber + 1);
      console.log("scene2");
    }, 3000);
  } else {
    // add buttons with an onclick to handle which scene to go to
    loadChoices(choices)
  }
  
}

loadScene(0);




// loadThoughts(0);
