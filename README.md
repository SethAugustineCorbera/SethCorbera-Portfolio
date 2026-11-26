# Seth Augustine J. Corbera - Portfolio

Static portfolio website. Open `index.html` in a browser, no build step needed.

## Structure

```
index.html            page content (HTML only)
css/
  base.css            reset, fonts, typography, accessibility
  layout.css          header, hero, section bands, merged contact + footer
  components.css      buttons, about, skills, projects, involvement, certificates
js/
  main.js             mobile menu, header on scroll, active link, certificate viewer
assets/
  images/             optimized photo and certificates (WebP)
```

## Editing tips

- Icons: every icon is a simple line icon defined once in the icon set at the top of `index.html` (the `<symbol id="i-...">` list). Use one with `<svg class="ico" aria-hidden="true"><use href="#i-code"/></svg>`. It takes the colour of the surrounding text.
- Add a skill: copy a `<li class="skill">` block in the Skills section and change the icon, name and type.
- Add a project: copy a `<li class="project">` block and change the number, title, text and tags. Projects have no pictures on purpose.
- Add a certificate: copy a `<li class="cert-card">` block in the Certificates section, add the image to `assets/images/` (WebP, about 1600px wide) and update the text. Cards wrap onto new rows automatically.
- Contact and footer are one block (`<footer id="contact">`). Edit the four links there.
- Main purple is `#6b2fd9`, hero background is `#2b1260`, accent yellow is `#ffd166` (search and replace in the CSS files to change them).
