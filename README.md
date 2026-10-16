# Lizalise Hlangani — ICT Student Portfolio

A responsive, buildless portfolio for an ICT student specialising in Application Development at Durban University of Technology.

## Pages

- Overview: introduction, technical interests, badges, featured projects, contact form.
- About: background, education, and technical skills.
- Projects: Cisco Packet Tracer coffee shop simulation and this portfolio.
- CV & documents: three tailored CVs and matching cover letters.
- Certificates: Cisco credentials with links to Credly.

## Run locally

From the project folder, run `python -m http.server 8000 --bind 127.0.0.1`, then open http://127.0.0.1:8000. No build step or package installation is needed.

Asset paths use the exact casing of the CSS, JS, Images, and Documents folders so the site also works on case-sensitive static hosts.

## Contact form

The form uses the existing Formspree endpoint, with native HTML validation, pending and error feedback, and a 15-second timeout. The endpoint must be active in the owner's Formspree account. Actual delivery requires a live submission; automated checks do not send messages.

## Editing

- Shared colours and base styles: `CSS/base.css`.
- Layouts, cards, and responsive styles: `CSS/main.css`.
- Contact submission: `JS/main.js`.
- Career PDFs: `Documents/`.

Preserve exact filename casing when updating assets. Keep credential links and student details current.

## Author

- GitHub: https://github.com/Liza-lise
- LinkedIn: https://www.linkedin.com/in/lizalise-hlangani-87b4a82a8
