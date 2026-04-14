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
