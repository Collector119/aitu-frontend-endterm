# Midterm Project — Astana IT University Website

Astana IT University, Web Technologies
Team, group SE-2530: Anarov Daniyal, Nabi Temirlan, Mukashev Arman

Published site: https://torch883.github.io/aitu-frontend-midterm/

## Topic

A five-page website about Astana IT University: what the university is, which bachelor programs it
offers, what the campus looks like and how to contact it.

## Pages

| Page | Content |
|---|---|
| `index.html` | Home: photo of the building with a title on top, three reasons to study at AITU, key numbers |
| `about.html` | About: history, mission, what students get, how to apply |
| `programs.html` | Programs: table of bachelor programs and three popular programs |
| `campus.html` | Campus: gallery of nine photos with captions |
| `contact.html` | Contact: address and a question form |

## Features

- navigation bar on every page, the current page is highlighted
- semantic HTML5: `header`, `nav`, `main`, `section`, `article`, `figure`, `address`, `footer`
- a table of programs and a contact form
- Flexbox for the navigation bar, Grid for the numbers block and the gallery
- `position: relative` and `position: absolute` for the text on the home photo and the gallery captions
- media queries for tablet (`max-width: 992px`) and mobile (`max-width: 576px`)
- Bootstrap 5 grid (`container`, `row`, `col-md-*`, `col-lg-*`) and utility classes

## Instructions

Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/torch883/aitu-frontend-midterm.git
cd aitu-frontend-midterm
open index.html
```

Bootstrap is included as a local file `css/bootstrap.min.css`, so no internet connection, server or
build step is required.

## Credits

Photos in `images/` are from [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Astana_IT_University)
under the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) license. Authors:
Aliaskarov Danial (`building.jpg`), Pavelkazaku (`hall.jpg`), ZhamilyaYeshen (all other photos).

