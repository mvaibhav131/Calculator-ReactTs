# Calculator — React + TypeScript

A sleek, iOS-inspired dark calculator built with **React**, **TypeScript**, and **Tailwind CSS**.

🔗 **Live Demo:** [vaibhav-react-ts-calculator.netlify.app](https://vaibhav-react-ts-calculator.netlify.app/)

---

## Features

- Dark glassmorphism UI inspired by iOS Calculator
- Responsive layout — works on mobile, tablet, and desktop
- Supports `+`, `−`, `×`, `÷`, `%`, and decimal input
- Live result preview as you type
- Backspace (`C`) and full clear (`AC`)
- Built with TypeScript for type safety
- Styled entirely with Tailwind CSS utility classes

---

## Tech Stack

| Tool         | Purpose          |
| ------------ | ---------------- |
| React 18     | UI library       |
| TypeScript   | Type safety      |
| Tailwind CSS | Styling          |
| Docker       | Containerization |

---

## Getting Started

### Install dependencies

```bash
cd calculator
npm install
```

### Run in development mode

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser. Hot-reloads on file changes.

### Run tests

```bash
npm test
```

### Build for production

```bash
npm run build
```

Outputs optimized static files to the `build/` folder, ready for deployment.

---

## Docker

```bash
docker build -t calculator .
docker run -p 3000:3000 calculator
```

---

## Project Structure

```
src/
├── App.tsx          # Main calculator component (logic + UI)
├── App.css          # Custom Tailwind component classes
├── index.tsx        # React entry point
└── index.css        # Global styles / Tailwind directives
```

---

## Author

Made by [Vaibhav More](https://vaibhav-more-portfolio-site.netlify.app/)

[![Twitter](https://img.shields.io/badge/Twitter-@mvaibhav131-1DA1F2?style=flat&logo=twitter)](https://twitter.com/mvaibhav131)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-vaibhav131-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/vaibhav131/)
[![GitHub](https://img.shields.io/badge/GitHub-mvaibhav131-181717?style=flat&logo=github)](https://github.com/mvaibhav131)
[![Instagram](https://img.shields.io/badge/Instagram-vaibhavmore1997-E4405F?style=flat&logo=instagram)](https://www.instagram.com/vaibhavmore1997/)

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
