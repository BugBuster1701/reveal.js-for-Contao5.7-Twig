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
- abgelegt in files/reveal/dist/theme/fonts/lato-v24-latin
- passende CSS Datei von Webseite kopiert und angelegt
- angepasst files/reveal/dist/theme/league.css 
- auf die gleiche Art auch für den Font League Gothic

## Plugins hinzugefügt
### Title-Footer, Fork mit Author und Datum
- https://github.com/skyface753/Reveal.js-Title-Footer
- abgelegt in files/reveal/dist/plugin/

Leider nicht kompatibel mit neuerem reveal.js.<br>
Daher wurde die js Datei angepasst/umgeschrieben
- files/reveal/dist/plugin/title-footer.js
- files/reveal/dist/plugin/title-footer.css

Ich bin kein JavaScript Programmierer, daher verzeiht mir die Code "Qualität" :-) 

