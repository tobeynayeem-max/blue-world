# blue-world
BLUE WORLD is a simple web application that converts written text into voice using JavaScript SpeechSynthesis API. Users can type text and listen to it instantly with a clean and interactive interface.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BLUE WORLD</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <h1>🌍 BLUE WORLD</h1>
    <h2>Voice from Writing</h2>

    <textarea id="text" placeholder="এখানে লিখুন..."></textarea>

    <button onclick="speakText()">🔊 Convert to Voice</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
body {
  margin: 0;
  padding: 0;
  font-family: Arial;
  background: linear-gradient(135deg, #0077ff, #00c6ff);
  color: white;
  text-align: center;
}

.container {
  margin-top: 100px;
}

textarea {
  width: 300px;
  height: 120px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 16px;
}

button {
  margin-top: 15px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background: white;
  color: #0077ff;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: #ddd;
}function speakText() {
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
