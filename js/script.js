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

let user = JSON.parse(localStorage.getItem("bruker"));
console.log(user);

const historie = [
  {
    id: 1,
    image: "../img/hovedperson_går.png",
    // description: "Lorem ipsum",
subtext: [
[      {
        text: `Welcomme ${user.navn}!`,
        id: "nr_1",
        position: "center"
      },
      {
        text: "Your character's name is William, and he is 16 years old. He grew up in Manchester, but now lives in London.",
        id: "nr_2",
        position: "center"
      },
    ], [      {
        text: `Welcomme ${user.navn}!`,
        id: "nr_1",
        position: "center"
      },
      {
        text: "Your character's name is William, and he is 16 years old. He grew up in Manchester, but now lives in London.",
        id: "nr_2",
        position: "center"
      },], [      {
        text: `Welcomme ${user.navn}!`,
        id: "nr_1",
        position: "center"
      },
      {
        text: "Your character's name is William, and he is 16 years old. He grew up in Manchester, but now lives in London.",
        id: "nr_2",
        position: "center"
      },]
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
        id:"nr_2",
        nextId: 7
      },
      {
        text: "no",
        id:"nr_3",
        nextId: 20
      },
    ],
  },
  {
    id: 7,
    image: "../img/pa_benken_4.png",
    subtext: [],
    thoughts: [],
    talk: [{
      text: "Do you mean what you´re saying?",
      id: "nr_1",
      position: "right",
      person: "Girl"
    }],
    
  },
  {
    id: 8,
    image: "../img/pa_benken_4.png",
    subtext: [
      {
        text: "Choice: Be honest and say that you don’t mean it, or lie?",
        id:"nr_1",
        position: "center"
      },
    ],
    thoughts: [],
    talk: [],
    choices: [
      {
        text: "yes",
        id:"nr_2", 
        nextId: 9
      },
      {
        text: "no",
        id:"nr_3",
        nextId: 20
      },
    ],
  },
  {
    id: 9,
    image: "../img/pa_benken_4.png",
    subtext: [
      {
        text: "The girl becomes extremely happy.",
        id: "nr_1",
        position: "center"
      },
    ],
    thoughts: [],
    talk: [
      {
        text: "Thank you so much.",
        id: "nr_2",
        position: "right",
        person: "Girl"
      },
      {
        text: "We’re already like Bonnie and Clyde, and I really like you.",
        id: "nr_3",
        position: "right",
        person: "Girl"
      },
      {
        text: "...",
        id: "nr_4",
        position: "left",
        person: "William"
      }
    ],
    
  },
  {
    id: 10,
    image: "../img/pa_benken_4.png",
    subtext: [],
    thoughts: [
      {
        text: "What should I do?",
        id: "nr_1",
        position: "left",
        person: "William"
      },
      {
        text: "Is she joking? She has to be joking.",
        id: "nr_2",
        position: "left",
        person: "William"
      },
      {
        text: "We’re like black and white!",
        id: "nr_3",
        position: "left",
        person: "William"
      },
    ],
    talk: [],
    
  },
  {
    id: 11,
    image: "../img/kryss_1.png",
    subtext: [
      {
        text: "William stands up and leaves without saying anything.",
        id: "nr_1",
        position: "center",
      },
      {
        text: "He continues alone to the right at the crossroads, past everyone enjoying themselves in the park.",
        id: "nr_2",
        position: "center",
      },
    ],
    thoughts: [],
    talk: [],
    
  },
  {
    id: 12,
    image: "../img/hovedperson_går.png",
    subtext: [],
    thoughts: [
      {
        text: `I drift through days like distant dust,  Among their laughter, light, and trust.  Smiles shimmer, soft and bright - But I stand still, outside their light. Voices weave in warm embrace, While I wear a wordless face. Friendly fingers, fleeting flame, Yet every heart feels just the same. Cold confusion coils inside,  A silent storm I cannot hide.  Feelings flicker, faint and far - Like broken beams from a dying star. Why can they care so clean, so clear,  While I am locked behind my fear?  I search for sense, for spark, for sign -  But no soft sympathy is mine. A hollow hope, a heavy art: To want connection - without a heart.`,
        id: "nr_1",
        position: "left",
        person: "William"
      }
    ],
    talk: [],
    
  },
  {
      id: 13,
      image: "../img/jacob_hel.png",
      subtext: [],
      thoughts: [
        {
          text: "Isn’t that Jakob from class B?",
          id: "nr_1",
          position: "left",
          person: "William"
        }
      ],
      talk: [],
      
  },
  {
      id: 14,
      image: "../img/jacob_hel.png",
      subtext: [
        {
          text: "Choice: Should William try to give Jacob a handshake?",
          id: "nr_1",
          position: "center",
        }
      ],
    thoughts: [],
    talk: [],
    choices: [
      {
        text: "yes",
        id:"nr_2",
        nextId: 15
      },
      {
        text: "no",
        id:"nr_3",
        nextId: 19
      },
     ],
  },
  {
      id: 15,
      image: "../img/de_hilser.png",
      subtext: [{
        text: "Both of them light up when they greet.",
        id: "nr_1",
        position: "center",
     }],
     thoughts: [],
     talk: [
      {
        text: "The school project we have now is so difficult, and everyone in the class hates it.",
        id: "nr_2",
        position: "left",
        person: "William"
      },
      {
        text: "Yeah, but it’s fun.",
        id: "nr_3",
        position: "right",
        person: "Jacob"
      },
      {
        text: "The teacher is so funny!",
        id: "nr_4",
        position: "right",
        person: "Jacob"
      }
     ],
     
  },
  { 
    id: 16,
      image: "../img/de_hilser.png",
      subtext: [],
      thoughts: [
        {
          text: "Huh, funny?",
          id: "nr_3",
          position: "left",
          person: "William"
        },
        {
          text: "What is that sound he’s making?",
          id: "nr_3",
          position: "left",
          person: "William"
        }
      ],
      talk: [
      {
        text: "Remember the jokes about the cat and the water?",
        id: "nr_1",
        position: "right",
        person: "Jacob"
      },
      {
        text: "Ha! Ha! Ha!",
        id: "nr_2",
        position: "right",
        person: "Jacob"
      },
      ],
      
  },
  { 
    id: 17,
      image: "../img/de_hilser.png",
      subtext: [
        {
          text: "Jacob grows angry.",
          id: "nr_2",
          position: "center"
        },
        {
          text: "Jacob walks away.",
          id: "nr_4",
          position: "center"
        }
      ],
      thoughts: [],
      talk: [
      {
        text: "She only told a story about a cat. Why are you making such strange noises?",
        id: "nr_1",
        position: "left",
        person: "William"
      },
      {
        text: "You’re just like the cat—against everything and everyone.",
        id: "nr_3",
        position: "right",
        person: "Jacob"
      },
      ],
      
  },
  { 
    id: 18,
      image: "../img/de_hilser.png",
      subtext: [
        {
          text: "William is left standing there, alone.",
          id: "nr_1",
          position: "center"
        },
      ],
      thoughts: [],
      talk: [],
      
  },
  { 
    id: 19,
      image: "../img/blir_sinna_forid_de_ikke_hilser.png",
      subtext: [],
      thoughts: [],
      talk: [
      {
        text: "I’m just trying to be nice to you, but you can’t even manage to be kind for once.",
        id: "nr_1",
        position: "right",
        person: "Jacob"
      },
      {
        text: "Fine — just stay the way you are.",
        id: "nr_2",
        position: "right",
        person: "Jacob"
      },
      ],
      
  },
  { 
    id: 20,
      image: "../img/pa_benken_3.png",
      subtext: [
        {
          text: "The girl becomes very upset and again starts to cry.",
          id: "nr_1",
          position: "center"
        },
        {
          text: "William wants to say something.",
          id: "nr_4",
          position: "center"
        }
      ],
      thoughts: [ 
        {
          text: "Why am I like this?",
          id: "nr_2",
          position: "right",
          person: "Girl"
        },
        {
          text: "Why can’t I just stop living with the feeling that everyone hates me?",
          id: "nr_3",
          position: "right",
          person: "Girl"
        },
        {
          text: "What should I say?",
          id: "nr_5",
          position: "left",
          person: "William"
        }
      ],
      talk: [],
      
  }, 
  { 
    id: 21,
      image: "../img/pa_benken_3.png",
      subtext: [
        {
          text: "William tries to say something, but no sound comes out of his mouth.",
          id: "nr_1",
          position: "center"
        },
        {
          text: "William stands up, waves, and walks away.",
          id: "nr_3",
          position: "center"
        }
      ],
      thoughts: [ 
        {
          text: "I can’t do it.",
          id: "nr_2",
          position: "left",
          person: "William"
        }
      ],
      talk: [],
      
  },
  {
    id: 22,
    image: "../img/kryss_2.png",
    subtext: [
      {
        text: "He turns left at the crossroads and continues alone past everyone enjoying themselves in the park.",
        id: "nr_1",
        position: "center",
      },
    ],
    thoughts: [],
    talk: [],
    
  },
  {
    id: 23,
    image: "../img/hovedperson_går.png",
    subtext: [],
    thoughts: [{
      text: "What is wrong with me?",
      id: "nr_1",
      position: "left",
      person: "William"
    }],
    talk: [],
    
  },
  {
    id: 24,
    image: "../img/hovedperson_går.png",
    subtext: [],
    thoughts: [
      {
        text: `I drift through days like distant dust,  Among their laughter, light, and trust.  Smiles shimmer, soft and bright - But I stand still, outside their light. Voices weave in warm embrace, While I wear a wordless face. Friendly fingers, fleeting flame, Yet every heart feels just the same. Cold confusion coils inside,  A silent storm I cannot hide.  Feelings flicker, faint and far - Like broken beams from a dying star. Why can they care so clean, so clear,  While I am locked behind my fear?  I search for sense, for spark, for sign -  But no soft sympathy is mine. A hollow hope, a heavy art: To want connection - without a heart.`,
        id: "nr_1",
        position: "left",
        person: "William"
      }
    ],
    talk: [],
    
  },
  {
    id: 25,
    image: "../img/liten_gutt_som_har_falt_og_slått_seg,_og_hovedperosn_ser_det.png",
    subtext: [
      {
        text: "Suddenly, his train of thought is interrupted when a small boy falls and hits himself right in front of him.",
        id: "nr_1",
        position: "center"
      }
    ],
    thoughts: [],
    talk: [],
    
  },
  {
      id: 26,
      image: "../img/liten_gutt_som_har_falt_og_slått_seg,_og_hovedperosn_ser_det.png",
      subtext: [
        {
          text: "Choice: Should he help the boy, (if not; walk past)?",
          id: "nr_1",
          position: "center",
        }
      ],
    thoughts: [],
    talk: [],
    choices: [
      {
        text: "yes",
        id:"nr_2",
        nextId: 27
      },
      {
        text: "no",
        id:"nr_3",
        nextId: 30
      },
     ],
  },
  {
    id: 27,
    image: "../img/liten_gutt_som_har_falt_og_slått_seg,_og_hovedperosn_ser_det.png",
    subtext: [
      {
        text: "William bends down to help the boy.",
        id: "nr_1",
        position: "center"
      }
    ],
    thoughts: [],
    talk: [
      {
        text: "Are you okay?",
        id: "nr_2",
        position: "left",
        person: "William"
      },
      {
        text: "I am like a shoelace.",
        id: "nr_3",
        position: "right",
        person: "Boy"
      },
      {
        text: "Can you help me up?",
        id: "nr_4",
        position: "right",
        person: "Boy"
      }
    ]

  },
  {
    id: 28,
    image: "../img/liten_gutt_som_har_falt_og_slått_seg,_og_hovedperosn_ser_det.png",
    subtext: [
      {
        text: "Now they are standing next to each other.",
        id: "nr_1",
        position: "center"
      }
    ],
    thoughts: [
    {
      text: "What do you do now?",
      id: "nr_2",
      position: "left",
      person: "William"
    },
    {
      text: "Should I stand here or leave?",
      id: "nr_3",
      position: "left",
      person: "William"
    }
  ],
    talk: [
      {
        text: "Thank you very much for the help, may I give you a hug?",
        id: "nr_4",
        position: "right",
        person: "Boy"
      }
    ],
    

  },
  {
    id: 29,
    image: "../img/liten_og_hovedperosn_gir_hveradnre_en_klemm_.png",
    subtext: [
      {
        text: "Should I stand here or leave?",
        id: "nr_1",
        position: "center"
      }
    ],
    thoughts: [],
    talk: [],
    
  },
  {
    id: 30,
    image: "../img/hovedperson_går.png",
    subtext: [
      {
        text: "William walks past the crying boy and is alone again.",
        id: "nr_1",
        position: "center"
      }
    ],
    thoughts: [
      {
        text: "It is normal not to feel anything in situations like this.",
        id: "nr_2",
        postion: "left",
        person: "William"
      },
      {
        text: "The most important thing is that I am myself.",
        id: "nr_3",
        postion: "left",
        person: "William"
      }
    ],
    talk: [],
    
  }
];

// console.log(historie[5]);

// let området = document.getElementById("right");

let historieOmrådet = document.getElementById("right");
let bildeOmrådet = document.getElementsByClassName("left")[0];
// let wrapper_1 = document.getElementsByClassName("wrapper_1")[0];

console.log(bildeOmrådet)
// console.log(wrapper_1);



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
        // console.log(choices[i].nextId);

        knappOmmrådet.innerHTML += `
        <button class="${choices[i].text}" id="${choices[i].id}" onclick="loadScene(${(choices[i].nextId - 1)})" >
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

  console.log(sceneNumber)
  let scene = historie[sceneNumber];

  if(scene === undefined) {

    historieOmrådet.innerHTML += `
        <p class="PåNytt" id="nr_5" onclick="loadScene(0)" >
       Play again
        </p>
        `;

    return;
  }

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

  // if (scene.choices.length > 0) {
    // loadChoices(choices)
  //   console.log(sceneNumber);
  // } else if(!scene.choices)  {
  //   setTimeout(() => {
  //     loadScene(sceneNumber + 1);
  //     console.log(sceneNumber);
  //   }, 100);
  // }

  if (!scene.choices || scene.choices.length <= 0 ) {
    setTimeout(() => {
      loadScene(sceneNumber + 1);
      console.log("scene2");
    }, 3000);
  } else {
    // add buttons with an onclick to handle which scene to go to
    loadChoices(choices)
    
  }

  console.log(scene.id);
  localStorage.setItem("posisjon", scene.id);
  
}


if (parseInt(localStorage.getItem("posisjon")) === null) {
  console.log("DEN ER ikke I LOCAL STORAGE");
  loadScene(0);
} else {
  console.log("DEN finnes I LOCAL STORAGE");
  loadScene((localStorage.getItem("posisjon") - 1));
}

// loadScene(0);



// ${sceneNumber = choices.nextId}




// loadThoughts(0);