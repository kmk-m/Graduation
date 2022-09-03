const signin = document.getElementById("signin");
const signup = document.getElementById("signup");
signin.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:3000/signin";
});
signup.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:3000/signup";
});
//********** Speack****** */
const speak = (msg) => {
  const sp = new SpeechSynthesisUtterance(msg);
  const voice = speechSynthesis.getVoices();
  sp.voice = voice[0];
  speechSynthesis.speak(sp);
};

// ******************Listen********************
var speech = true;
var word = [];
document.addEventListener("keypress", (event) => {
  var name = event.key;
  if (name == "a") {
    speak("Hi im alexa how can i help you");
  }
  if (name == "s") {
    word = [];
    reload();
  }
});
function reload() {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  var vs = false;
  recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");

    //   document.getElementById("p").innerHTML = transcript;
    if (word.length < 2) word.push(transcript);

    if (word.length >= 2 && !vs) {
      read(), (vs = true);
    }
  });

  if (speech == true) {
    recognition.start();
    // recognition.addEventListener('end', recognition.start);
  }
  read();
}

function read() {
  var vis = false;

  for (let i = 0; i < word.length; i += 1) {
    //console.log(word[i])
    if (word[i] == "login" || word[i] == "log in") {
      speak("Did you mean signin or signup?");
      vis = true;
      break;
    } else if (word[i] == "signin" || word[i] == "sign in") {
      window.location.href = "http://127.0.0.1:3000/signin";
      vis = true;
      speak("Sign in page is opened ");
      break;
    } else if (word[i] == "signup" || word[i] == "sign up") {
      window.location.href = "http://127.0.0.1:3000/signup";
      vis = true;
      speak("Sign up page is opened ");

      break;
    }
  }
  if (!vis && word.length > 0) {
    speak("im sorry i donot understand you");
    vis = true;
  }
}
