# Endterm Project — Astana IT University Website

Astana IT University, Web Technologies
Team, group SE-2530: Anarov Daniyal, Mukashev Arman

Published site: https://collector119.github.io/aitu-frontend-endterm/

## Topic

The endterm continues our midterm website about Astana IT University. The five pages, the
navigation, the Bootstrap layout and the media queries stay the same. The endterm adds interactive
features written in JavaScript and jQuery.

## Group Members

| Member | Endterm features |
|---|---|
| Anarov Daniyal | programs table built from an array, search and field filter, favorites list, dark theme switcher |
| Mukashev Arman | contact form validation, campus gallery filter (jQuery), FAQ accordion (jQuery), README |

## Pages

| Page | Content | New in the endterm |
|---|---|---|
| `index.html` | Home: photo, three reasons to study at AITU, key numbers | theme switcher |
| `about.html` | About: history, mission, how to apply | FAQ accordion |
| `programs.html` | Programs: table of bachelor programs | table from an array, search, filter, favorites |
| `campus.html` | Campus: gallery of nine photos | filter by category |
| `contact.html` | Contact: address and a question form | form validation |

## New Endterm Features

| Feature | File | What it uses |
|---|---|---|
| Programs table from an array | `js/programs.js` | array of objects, `forEach`, `createElement`, `appendChild` |
| Search and field filter | `js/programs.js` | `for...of`, function that returns an array, `input`, `change` and `keydown` events |
| Favorites list | `js/programs.js` | second array, adding and removing `li` elements, `data-name` attribute |
| Dark theme switcher | `js/theme.js` | `classList`, `localStorage`, `click` and `DOMContentLoaded` events |
| Contact form validation | `js/contact.js` | `submit` event, `preventDefault()`, email pattern, minimum length, option selection |
| Campus gallery filter | `js/campus.js` | jQuery class and attribute selectors, `siblings()`, `fadeIn()` |
| FAQ accordion | `js/about.js` | jQuery ID and descendant selectors, `closest()`, `siblings()`, `find()`, `next()`, `slideUp()`, `slideToggle()` |

## How to Test

1. **Theme.** Press `Dark theme` in the header. Open another page: the dark theme stays.
2. **Programs search.** On Programs, type `data` into the search field: one program is left.
   Press `Esc` to clear the search. Choose `Digital media` in the Field list: two programs are left.
   Type `zzz`: a message says that no programs match.
3. **Favorites.** Press `Save` next to a program. It appears under My Favorite Programs and the
   button changes to `Saved`. Press `Remove` in the list or `Saved` in the table to delete it.
4. **Gallery filter.** On Campus, press `Study`, `Building` or `Student life`. Only photos of that
   category fade in. `All` shows all nine photos again.
5. **FAQ.** On About, click a question at the bottom. The answer slides down; opening another
   question closes the previous one.
6. **Form validation.** On Contact, press `Send` with an empty form. Every field shows its own
   error. Fill in a name of at least 3 characters, an email like `name@example.com`, choose a
   program, write a message of at least 20 characters and tick the checkbox. Press `Send`: a green
   success message appears and the form is cleared.

## Instructions

Open the published site, or clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/Collector119/aitu-frontend-endterm.git
cd aitu-frontend-endterm
open index.html
```

Bootstrap is a local file `css/bootstrap.min.css`. jQuery 3.7.1 is loaded from
`code.jquery.com`, so the gallery filter and the FAQ need an internet connection.

## Credits

Photos in `images/` are from [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Astana_IT_University)
under the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) license. Authors:
Aliaskarov Danial (`building.jpg`), Pavelkazaku (`hall.jpg`), ZhamilyaYeshen (all other photos).
