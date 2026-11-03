# BIT Cyber Shield Club

**Tagline:** Securing the Digital Future.  
**Organization:** Baobab Institute of Tanzania (BIT)

A responsive, multi-page static website for a student cybersecurity club. Built with HTML5, CSS3 and vanilla JavaScript, with no build step or mandatory backend.

## Project structure

```text
bit-cyber-shield-club/
├── index.html
├── about.html
├── departments.html
├── activities.html
├── learning.html
├── events.html
├── team.html
├── join.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── eagle-shield.svg
└── README.md
```

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a browser.
3. For a more realistic local server, use the VS Code **Live Server** extension or run `python -m http.server 8000` from the project folder, then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Sign in at [GitHub](https://github.com/).
2. Create a new **Public** repository named `bit-cyber-shield-club`.
3. Upload the contents of this project. Make sure `index.html` is in the repository root, not inside an extra nested folder.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then click **Save**.
7. Wait for the Pages deployment to finish. Your site URL will look like:
   `https://YOUR-USERNAME.github.io/bit-cyber-shield-club/`

If using a different repository name, the URL will use that name.

## Before publishing

Search the project for `ADD-OFFICIAL-EMAIL-HERE` and replace it with the club's approved public email address in:
- `contact.html`
- `js/script.js`

Also confirm and update:
- Official college address and approved college branding.
- Club leadership names and roles.
- Social media URLs.
- Event dates, venues and registration details.
- Membership rules and eligibility.

Do not publish personal contact details or photographs without consent and appropriate approval.

## Forms and data handling

GitHub Pages hosts static files only. The membership and contact forms use `mailto:` to prepare an email in the visitor's email application. They do **not** save submissions to a database, send data to a server, or provide an admin dashboard. If online form submissions or member accounts are needed later, connect a properly secured backend or reputable form service and review its privacy terms before collecting student information.

## Security and ethical use

All practical cybersecurity work must be limited to systems the club owns or has explicit permission to test. Use isolated labs and educational CTF platforms. Do not scan, access, disrupt or test third-party systems without authorization.

The forms validate required fields in the browser, but client-side validation is not a security boundary. Never add secrets, API keys, passwords or private student records to this public repository.

## Customization

- Colors, typography, layout and responsive behavior: `css/style.css`
- Navigation, reveal effects, resource search and form behavior: `js/script.js`
- Eagle shield logo: `assets/eagle-shield.svg`
- Page content: the relevant `.html` file

## Accessibility and performance

The site uses semantic page landmarks, labelled form fields, keyboard-accessible links and buttons, responsive layouts, and reduced-motion support. Google Fonts are loaded externally; system fonts remain available as fallbacks.
