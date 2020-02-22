document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("huzzMe").addEventListener('click', modifyText.bind(null, 'huzz'), false);
  document.getElementById("ompMe").addEventListener('click', modifyText.bind(null, 'omp'), false);

  function modifyText(str) {
    chrome.tabs.getSelected(null, function (tab) {
      function huzzompify() {
        const HUZZ = 'huzz';
        const OMP = 'omp';
        const modifier = objModifier.str;
        const d = document.querySelectorAll('h1, h2, h3, h4, h5, p, span');
        for (var i = 0; i < d.length; i++) {
          var text = d[i].innerText.split(' ');
          for (var j = 0; j < text.length; j++) {
            var word = text[j];
            var wordLen = word.length
            if ((Math.random() >= 0.7) && (wordLen > 2)) {
              if (modifier === OMP) {
                text[j] = word.substring(0, wordLen - 2).concat(OMP);
              } else if (modifier === HUZZ) {
                text[j] = HUZZ.concat(word.substring(2, wordLen));
              }
            }
          }
          d[i].innerText = text.join(' ');
        }
      }
      chrome.tabs.executeScript({code: 'var objModifier = ' + JSON.stringify({str}) + ';'}, 
        function() {
          chrome.tabs.executeScript({code: '(' + huzzompify + ')()'});
      });
    });
  };
});