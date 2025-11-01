# openforge-landing-page

This is a repository that contains a landing page for OpenForge project.

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com).

### Prerequisites

- Node.js 18+ installed
- A Vercel account

### Deploy to Vercel

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Import your repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your Git repository
   - Vercel will automatically detect Next.js and configure the build settings

3. **Deploy:**
   - Vercel will automatically build and deploy your application
   - The build command (`npm run build`) and output directory (`.next`) are already configured

### Manual Deployment

Alternatively, you can deploy using the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Environment Variables

Currently, this project doesn't require any environment variables. If you add any in the future, configure them in the Vercel project settings under "Environment Variables".

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

To create an optimized production build:

```bash
npm run build
npm start
```
