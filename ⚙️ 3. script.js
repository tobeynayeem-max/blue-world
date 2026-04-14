function speakText() {
  let text = document.getElementById("text").value;

  if (text === "") {
    alert("দয়া করে কিছু লিখুন!");
    return;
  }

  let speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-US"; // বাংলা চাইলে bn-BD চেষ্টা করতে পারো
  speech.rate = 1;
  speech.pitch = 1;

  speechSynthesis.speak(speech);
}
