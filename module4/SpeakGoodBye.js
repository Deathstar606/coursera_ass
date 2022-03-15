(function (window) {
  var speakword = 'Good bye '
  var byespeaker = function (name) {
    console.log(speakword + name)
  }
  window.byespeaker = byespeaker
})(window)

