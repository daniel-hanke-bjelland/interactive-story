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

const historie = [
  {
    id: 1,
    image: "../img/Hovedperson går.png",
    // description: "Lorem ipsum",
    subtext: [
      {
        text: "Welcomme Ola Nordman!",
      },
      {
        text: "Your character's name is William, and he is 16 years old. He grew up in Manchester, but now lives in London.",
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
      },
      {
        text: "William walks on.",
      },
    ],
    thoughts: [
      {
        text: "What are they doing?",
      },
      {
        text: "Isn’t it just a ring?",
      },
      {
        text: "Is she crying?",
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
      },
    ],
    thoughts: [
      {
        text: "Finally, I can relax.",
      },
    ],
    talk: [],
  },
  {
    id: 4,
    image: "../img/På benken_3.png",
    subtext: [
      {
        text: "tada",
      },
    ],
    thoughts: [],
    talk: [
      {
        text: "Nobody likes me, and I can’t take it anymore.",
      },
    ],
  },
  {
    id: 5,
    image: "../img/På benken_3.png",
    subtext: [
      {
        text: "William thinks:",
      },
    ],
    thoughts: [
      {
        text: "This reminds me of the time when I was three years old.",
      },
      {
        text: "The screams and the sirens will never disappear.",
      },
      {
        text: "Back then it was a splinter in the eye. Now it’s a log.",
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


function loadSubText(subtext) {
  let i1 = document.getElementById("info_1");
  let i2 = document.getElementById("info_2");
  let i3 = document.getElementById("info_3");

  i1.innerHTML = "";
  i2.innerHTML = "";
  i3.innerHTML = "";

  const elements = [i1, i2, i3]; // add all your elements here

  for (let index = 0; index < subtext.length; index++) {
    elements[index].innerHTML += `<h3>${subtext[index].text}</h3>`;
  }
}


function loadScene(sceneNumber) {
  let scene = historie[sceneNumber];
  let subtext = scene.subtext;

  loadSubText(subtext);

  if(scene.thoughts) {
      loadThoughts()

  }

  if(scene.talk) {
      loadTalk()

  }

  if (!scene.choices) {
    setTimeout(() => {
      loadScene(sceneNumber + 1);
      console.log("scene2");
    }, 3000);
  } else {
    //add buttons with an onclick to handle which scene to go to
  }
}

loadScene(0);
