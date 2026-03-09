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
    image: "../img/Hovedperson går.png",
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
    image: "../img/Frieri.png",
    subtext: [
      {
        text: "William walks past a couple who are getting engaged. Ola Nordman!",
        id:"nr:_1",
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
    image: "../img/På benken_2.png",
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
    image: "../img/På benken_3.png",
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
    image: "../img/På benken_3.png",
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
    image: "../img/På benken_3.png",
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
      },
      {
        text: "no",
        backgroundColor: "red",
      },
    ],
  },
];

// console.log(historie[5]);

// let området = document.getElementById("right");

let historieOmrådet = document.getElementById("right");
let bildeOmrådet = document.getElementsByClassName("left").innerHTML;

function loadSubText(subtext) {
  // let i1 = document.getElementById("info_1");
  // let i2 = document.getElementById("info_2");
  // let i3 = document.getElementById("info_3");
  
  // i1.innerHTML = "";
  // i2.innerHTML = "";
  // i3.innerHTML = "";
  
  // const elements = [området]; // add all your elements here
  
  // for (let index = 0; index < subtext.length; index++) {
  //   elements[index].innerHTML += `<h3>${subtext[index].text}</h3>`;
  // }


  for (let i = 0; i < subtext.length; i++) {
  let marginStyle = "0 auto 0 0"; 

  if (subtext[i].position === "right") {
    marginStyle = "0 0 0 auto"; 
  } else if (subtext[i].position === "center") {
    marginStyle = "0 auto";
  }

  historieOmrådet.innerHTML += `
    <p class="subtext" id="${subtext[i].id}" style="margin: ${marginStyle};">
      ${subtext[i].text}
    </p>
  `;
}


  // for (let i = 0; i < subtext.length; i++) {
  //   let p = document.createElement("p");
  //   p.textContent = `<p id="test" >${subtext[i].text}</p>`;
  //   historieOmrådet.appendChild(p);
  // }
}

function loadThoughts(thoughts) {
  // let h1 = document.getElementById("h_1");
  // let h2 = document.getElementById("h_2");
  // let h3 = document.getElementById("h_3");
  // let h4 = document.getElementById("h_4");
  // let h5 = document.getElementById("h_5");
  
  // elements.innerHTML= ""
  
  // h1.innerHTML = "";
  // h2.innerHTML = "";
  // h4.innerHTML = "";
  // h5.innerHTML = "";
  
  // const elements = [h1, h2, h4, h5];
  
  
  // for (let index = 0; index < thoughts.length; index++) {
  //   elements[index].innerHTML += `<p>${thoughts[index].text}</p>`
    
  // }

  for (let i = 0; i < thoughts.length; i++) {
    let marginStyle = "0 auto 0 0"; 

    if (thoughts[i].position === "right") {
      marginStyle = "0 0 0 auto"; 
    } else if (thoughts[i].position === "center") {
      marginStyle = "0 auto";
    }

    
    historieOmrådet.innerHTML += `
    <p class="thoughts" data-person="${thoughts[i].person}" id="${thoughts[i].id}" style="margin: ${marginStyle};">
    ${thoughts[i].text}
    </p>
    `

}
}

function loadTalk(talk) {
 for (let i = 0; i < talk.length; i++) {
  let marginStyle = "0 auto 0 0"; 

  if (talk[i].position === "right") {
    marginStyle = "0 0 0 auto"; 
  } else if (talk[i].position === "center") {
    marginStyle = "0 auto";
  }

  historieOmrådet.innerHTML += `
    <p class="talk" data-person="${talk[i].person}" id="${talk[i].id}" style="margin: ${marginStyle};">
      ${talk[i].text}
    </p>
  `;
}
}


function loadScene(sceneNumber) {
  let scene = historie[sceneNumber];
  let subtext = scene.subtext;
  let thoughts = scene.thoughts;
  let talk = scene.talk;

  historieOmrådet.innerHTML = "";
  console.log("TØMT OMRÅDET");
  
  if (scene.subtext.length > 0) {
    loadSubText(subtext);
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
    loadThoughts(thoughts)
  } 
  
  if(scene.talk.length > 0) {
    loadTalk(talk)
  } 

  if (!scene.choices) {
    setTimeout(() => {
      loadScene(sceneNumber + 1);
      console.log("scene2");
    }, 3000);
  } else {
    // add buttons with an onclick to handle which scene to go to
  }
  
}

loadScene(0);




// loadThoughts(0);
