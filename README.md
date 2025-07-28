# Next.js Portfolio Website

This is a portfolio website template built with Next.js, Tailwind CSS, and Shadcn UI. It's designed for graphic designers, web designers, and other creatives to showcase their work.

## Features

-   **Modern Design**: Clean, minimalist, and responsive design.
-   **Project Portfolio**: Dedicated pages for individual projects with image galleries.
-   **Category Pages**: Organize projects by categories.
-   **About Page**: Share your story, skills, and experience.
-   **Contact Page**: Provide contact information and social links.
-   **Image Protection**: Prevents right-click saving and dragging of images.
-   **Full-screen Image Viewer**: Allows users to view project images in a modal gallery.
-   **Developer Credit**: A subtle credit in the footer for the developer.
-   **Email Hyperlinks**: Automatically creates clickable email links.

## Getting Started

1.  **Clone the repository**:
    \`\`\`bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    \`\`\`
2.  **Install dependencies**:
    \`\`\`bash
    npm install
    # or
    yarn install
    \`\`\`
3.  **Run the development server**:
    \`\`\`bash
    npm run dev
    # or
    yarn dev
    \`\`\`
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Project Data

Edit the `data/projects.ts` file to add, remove, or modify your portfolio projects.

### Contact Information

Update your contact details and social media links in `data/contact.ts`.

### Content

Modify the content on the `app/page.tsx`, `app/about/page.tsx`, and `app/contact/page.tsx` files to reflect your personal brand and information.

### Styling

This project uses Tailwind CSS. You can customize the theme and styles by editing `tailwind.config.ts` and `app/globals.css`.

### Components

Shadcn UI components are used throughout the project. You can customize them or add new ones as needed.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-intro) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
