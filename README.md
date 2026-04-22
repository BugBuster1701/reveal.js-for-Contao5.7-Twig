# reveal.js-for-Contao5.7-Twig
reveal.js für Contao 5.7 im Twig Layout mit einigen Plugins ergänzt.<br>
Verwendet wurde reveal.js Version 6.0.1

Dabei wird mittels eigenem Seiten-Template, Artikel-Template und Textelement-Template gearbeitet. Das erleichert die Erstellung der Folien / Slides. (HTML Präsentation)

Für meine Webseite gebaut, kann aber für jede andere auch verwendet werden.<br>
Dazu können dann auch einige der Dateinamen anders genannt werden, die sind derzeit durch mehrere parallele Versuche so entstanden.

This is free software and can be used 'as is', for license of reveal.js please visit https://github.com/hakimel/reveal.js repository on GitHub

For questions concerning the license, installation or options of reveal.js please read https://github.com/hakimel/reveal.js repository on GitHub


## Anpassungen gegenüber Original - Theme / Font Lato

Das Theme "league", welches ich verwende, zieht einen Zeichensatz Lato von extern.

Das wurde angepasst. (wegen CSP und Datenschutz)

- geladen von https://gwfh.mranftl.com/fonts/lato?subsets=latin
- abgelegt in `files/reveal/dist/theme/fonts/lato-v24-latin`
- passende CSS Datei von Webseite kopiert und angelegt
- angepasst `files/reveal/dist/theme/league.css`
- auf die gleiche Art auch für den Font League Gothic

## Plugins hinzugefügt
### Title-Footer, Fork mit Author und Datum
- https://github.com/skyface753/Reveal.js-Title-Footer
- abgelegt in files/reveal/dist/plugin/

Leider nicht kompatibel mit neuerem reveal.js.<br>
Daher wurde die js Datei angepasst/umgeschrieben
- `files/reveal/dist/plugin/title-footer.js`
- `files/reveal/dist/plugin/title-footer.css`

Ich bin kein JavaScript Programmierer, daher verzeiht mir die Code "Qualität" :-) 

### Menu
- https://github.com/denehyg/reveal.js-menu archived, daher fork genommen:
- https://github.com/koodaamo/reveal.js-menu
- abgelegt in `files/reveal/dist/plugin/menu`

## Datei js_reveal.html.twig
Darin werden alle benötigten JavaScript Dateien geladen und Reveal.js konfiguriert und initialisiert.<br>
Dort sind auch die Definitionen für den Footer zu finden.

Die Datei liegt in `templates/reveal/js_reveal.html.twig` und wird vom Page Layout geladen. (eigene Variante)

## Page Layout
Es wurde eine eigene Variante angelegt reveal-main.html.twig, darin wird das spezielle Layout definiert (nur main), die CSS Dateien geladen und die `js_reveal.html.twig`.<br>
Die eigene CSS Datei league_ninja.css ist da, um einige CSS Definitionen zu überschreiben, der Name ist natürlich frei wählbar.<br>
Auch ein Logo wird hierüber definiert.

## Templates
- `templates/reveal/mod_article.html.twig`
- `templates/reveal/content_element/text.html.twig`

# Nutzung - Theme Definitionen
- neues Theme anlegen
  - Ordner: `files/reveal`
  - Templates-Ordner: `reveal`

- Seitenlayout vom Typ "TWIG Layout mit Slots" darin anlegen
  - Seiten-Template: `page/layout/reveal-main [Global]`
  - Eingebundene Elemente: Artikel - slot main

# Nutzung Seiten - Artikel - Text Elemente
- Seite anlegen mit angelegtem Seitenlayout
- Cache, beide auf "nicht cachen"

- Artikel anlegen mit Standard Artikel-Template: `mod_article (Standard)`<br>(article = slide)<br>
Das wird im Frontend dann automatisch durch `templates/reveal/mod_article.html.twig` ersetzt

- Text Element(e) anlegen mit Standard Inhaltselement-Template: `content_element/text [ContaoCore]`<br>(text-element = subslide)<br>
Das wird im Frontend dann automatisch durch `templates/reveal/content_element/text.html.twig` ersetzt.

Im TinyMCE nun normal den Inhalt eintragen. Überschrift kann genutzt werden, h2 bevorzugt. (dazu gibt es Definitionen in league_ninja.css)

Will man vertikale Folien haben (subslides), dann einfach ein zweites Text Element anlegen im Artikel. (bzw. mehrere, wieviel man halt will)



