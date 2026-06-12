# GGWebsite

This is the official repository for **GGWebsite** (Green Glass website). Built with React, Vite, and Tailwind CSS.

## Features & Stack
- **Framework**: React 19 + Vite 8
- **Styles**: Tailwind CSS
- **Design system**: Fully integrated responsive design system

## Getting Started

### Prerequisites
Make sure you have Node.js installed (v18+ recommended).

### Installation
Clone the repository, navigate to the project root, and install the dependencies:
```bash
npm install
```

### Development
Run the local development server:
```bash
npm run dev
```

### Build
Build the production-ready assets:
```bash
npm run build
```

---

## Deployment to Cloudflare Pages

This project is set up for easy deployment on **Cloudflare Pages**.

### Steps to Deploy via GitHub Integration:
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select this repository (`GGWebsite`).
4. Configure the following build settings:
   - **Framework Preset**: `Vite` (or `None`)
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
5. Click **Save and Deploy**. Cloudflare Pages will automatically rebuild and deploy on every push to the `main` branch.
