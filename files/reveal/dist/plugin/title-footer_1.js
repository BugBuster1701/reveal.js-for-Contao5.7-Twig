/********************************************************
 *                                                       *
 * Javascript for the Title-Footer plugin for Reveal.js  *
 *                                                       *
 * Author: Igor Leturia, Sebastian Joerz, Glen Langer    *
 *                                                       *
 * License: GPL v3                                       *
 * http://www.gnu.org/copyleft/gpl.html                  *
 *                                                       *
 ********************************************************/

window.RevealFooter = window.RevealFooter || {
  id: 'RevealFooter',
  init: function (deck) {
    initFooter(deck);
  }
};
const initFooter = function (Reveal) {
  /* Title-Footer object and properties declaration with default values */

  /* Function to obtain all child elements with any of the indicated tags (from http://www.quirksmode.org/dom/getElementsByTagNames.html) */

  function getElementsByTagNames(list, obj) {
    if (!obj) {
      var obj = document;
    }
    var tagNames = list.split(',');
    var resultArray = new Array();
    for (var i = 0; i < tagNames.length; i++) {
      var tags = obj.getElementsByTagName(tagNames[i]);
      for (var j = 0; j < tags.length; j++) {
        resultArray.push(tags[j]);
      }
    }
    var testNode = resultArray[0];
    if (!testNode) {
      return [];
    }
    if (testNode.sourceIndex) {
      resultArray.sort(function (a, b) {
        return a.sourceIndex - b.sourceIndex;
      });
    } else if (testNode.compareDocumentPosition) {
      resultArray.sort(function (a, b) {
        return 3 - (a.compareDocumentPosition(b) & 6);
      });
    }
    return resultArray;
  }

  function scriptPath() {
    // obtain plugin path from the script element
    var src;
    if (document.currentScript) {
      src = document.currentScript.src;
    } else {
      var sel = document.querySelector('script[src$="/plugin/title-footer.js"]')
      if (sel) {
        src = sel.src;
      }
    }
    var path = (src === undefined) ? "" : src.slice(0, src.lastIndexOf("/") + 1);
    //console.log("Path: " + path);
    return path;
  }

  /* Method to initialize the Title-Footer footer */

  function initializeFooter() {
    // Link to the Title-Footer CSS

    var link = document.createElement('link');
    link.href = scriptPath() + 'title-footer.css';
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(link);

    // Initialize properties according to parameters
  	var config = Reveal.getConfig().footer || {};
	  var title = config.title || '';
    var author = config.author || '';
    var show_date = config.show_date || false;

    this.background = config.background || 'rgba(0,0,0,0.1)';

    if (title != '') {
      this.title = title;
    } else {
      var first_section = document.getElementsByTagName('section')[0];
      if (first_section.getElementsByTagName('section').length > 0) {
        first_section = first_section.getElementsByTagName('section')[0];
      }
      var title_elements = getElementsByTagNames('h1,h2,h3', first_section);
      if (title_elements.length > 0) {
        this.title = title_elements[0].textContent;
        for (
          var title_elements_index = 1;
          title_elements_index < title_elements.length;
          title_elements_index++
        ) {
          this.title =
            this.title + ' - ' + title_elements[title_elements_index].textContent;
        }
      }
    }

    // Create the Title-Footer footer

    var title_footer = document.createElement('footer');
    title_footer.setAttribute('id', 'title-footer');
    title_footer.setAttribute('style', 'background:' + this.background);

    var title_footer_p = document.createElement('p');
    title_footer.appendChild(title_footer_p);
    
    var a_element = document.createElement('a');
    a_element.setAttribute('href', window.location.href);
    a_element.appendChild(document.createTextNode(this.title));
    
    title_footer_p.appendChild(a_element);
    
    if (author != '') {
      var author_element = document.createElement('span');
      author_element.appendChild(document.createTextNode(' - ' + author));
      title_footer_p.appendChild(author_element);
    }
    
    if (show_date) {
      var date_element = document.createElement('span');
      date_element.appendChild(
        document.createTextNode(' - ' + new Date().toLocaleDateString('de-DE'))
      );
      title_footer_p.appendChild(date_element);
    }
    var div_class_reveal = document.querySelectorAll('.reveal')[0];
    div_class_reveal.appendChild(title_footer);
  }

  Reveal.addEventListener('ready', function () {
    //alert("READY");
    initializeFooter();
  });

  return this;
};