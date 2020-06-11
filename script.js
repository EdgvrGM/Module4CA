(function () {
  var names = [
    "Jose",
    "Juan",
    "Jordan",
    "Travis",
    "Paul",
    "Francis",
    "Larry",
    "Niko",
    "Ricardo",
    "Hugo",
  ];
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
