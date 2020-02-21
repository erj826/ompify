document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("ompMe").addEventListener('click', ompText, false);
    function ompText() {
      chrome.tabs.getSelected(null, function(tab) {
      function ompify() {
        d = document.querySelectorAll('h1, h2, h3, h4, h5, p, span');
        for (var i = 0; i < d.length; i++) {
          var text = d[i].innerText.split(' ');
          for (var j = 0; j < text.length; j++) {
            if ((Math.random() >= 0.7) && (text[j].length > 2)) {
              text[j] = text[j].substring(0, text[j].length - 2).concat('omp');
            }
          } 
          d[i].innerText = text.join(' ');
        }
      }
      chrome.tabs.executeScript({
          code: '(' + ompify + ')();'
      });
      });
    };

    document.getElementById("huzzMe").addEventListener('click', huzzText, false);
    function huzzText() {
      chrome.tabs.getSelected(null, function(tab) {
      function huzzify() {
        d = document.querySelectorAll('h1, h2, h3, h4, h5, p, span');
        for (var i = 0; i < d.length; i++) {
          var text = d[i].innerText.split(' ');
          for (var j = 0; j < text.length; j++) {
            if ((Math.random() >= 0.7) && (text[j].length > 2)) {
              text[j] = 'huzz'.concat(text[j].substring(2, text[j].length));
            }
          } 
          d[i].innerText = text.join(' ');
        }
      }
      chrome.tabs.executeScript({
          code: '(' + huzzify + ')();'
      });
      });
    };
});
