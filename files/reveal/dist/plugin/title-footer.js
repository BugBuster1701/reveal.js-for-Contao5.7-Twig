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
const RevealTitleFooter = {
  id: 'title-footer',
  init: function (deck) {
    let config = deck.getConfig().titleFooter || {};
    config.title = config.title || '';
    config.background = config.background || 'rgba(0,0,0,0.1)';
    config.author = config.author || '';
    config.showDate = config.showDate !== undefined ? config.showDate : true;

    function getDefaultTitle() {
      let firstSection = document.querySelector('section');
      if (firstSection && firstSection.querySelector('section')) {
        firstSection = firstSection.querySelector('section');
      }
      let titleElement = firstSection?.querySelector('h1,h2,h3');
      return titleElement ? titleElement.textContent : '';
    }

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

    var link = document.createElement('link');
    link.href = scriptPath() + 'title-footer.css';
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(link);
    
    const title = config.title || getDefaultTitle();
    const author = config.author;
    const showDate = config.showDate;

    let footer = document.createElement('footer');
    footer.setAttribute('id', 'title-footer');
    footer.style.background = config.background;

    let footerContent = document.createElement('p');
    footer.appendChild(footerContent);

    let titleLink = document.createElement('a');
    titleLink.setAttribute('class', 'title-link');
    titleLink.setAttribute('href', '#/0');
    titleLink.textContent = title;
    footerContent.appendChild(titleLink);

    if (author) {
      let authorSpan = document.createElement('span');
      authorSpan.setAttribute('class', 'author');
      authorSpan.textContent = ` - ${author}`;
      footerContent.appendChild(authorSpan);
    }

    if (showDate) {
      let dateSpan = document.createElement('span');
      dateSpan.setAttribute('class', 'date');
      dateSpan.textContent = ` - ${new Date().toLocaleDateString('de-DE')}`;
      footerContent.appendChild(dateSpan);
    }

    document.querySelector('.reveal').appendChild(footer);
  },
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RevealTitleFooter;
} else {
  window.RevealTitleFooter = RevealTitleFooter;
}
