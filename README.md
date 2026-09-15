# React Blog

A modern, aesthetic React blog application featuring client-side routing, an authentication context, protected admin routes, and smooth page transitions.

## Features

1. **Mock Blog Data**: In-memory storage of blog posts with unique IDs, URL-friendly slugs, titles, and full content.
2. **Public Blog Pages**:
   - **Blog Index (`/blog`)**: Displays a list of all available articles with clean styling.
   - **Dynamic Post Page (`/blog/[slug]`)**: Renders individual posts based on the URL slug. Includes a "Post not found" fallback state.
3. **Authentication System (`AuthContext`)**:
   - Manages global login state (`isAuthenticated`, `login()`, `logout()`).
   - Interactive Login page (`/login`).
   - Dynamic Navigation bar that toggles links based on user status.
4. **Protected Admin Route**:
   - Secure `/admin` dashboard accessible only to authenticated users (unauthenticated attempts are redirected to `/login`).
5. **Bonus - Page Transitions**:
   - Smooth fade-in/fade-out page transitions powered by `framer-motion` and `AnimatePresence`.
6. **Aesthetic UI/UX**:
   - Styled with Tailwind CSS, utilizing a soft pastel color palette, rounded components (`rounded-2xl`/`3xl`), and subtle shadows.


## Tech Stack

* **Core:** React, TypeScript
* **Routing:** React Router
* **Animations:** Framer Motion
* **Styling:** Tailwind CSS
* **Build Tool:** Vite