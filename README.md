# Webstack Take-Home Assignment

A headless CMS blog built with WordPress, Elementor, WPGraphQL, and Next.js — recreating the provided homepage mockup as both a WordPress/Elementor page and a Next.js frontend.

---

## Tech Stack

| Layer | Technology |
|---|---|
| CMS | WordPress (local via XAMPP) |
| Page Builder | Elementor |
| GraphQL API | WPGraphQL plugin |
| Frontend | Next.js (App Router) |
| Styling | Custom CSS |

---

## Features

- Responsive homepage layout matching the provided mockup
- Blog post grid fetched dynamically from WordPress via GraphQL
- Single post pages with dynamic routing (`/posts/[slug]`)
- Author name and avatar display
- About and Contact pages
- Shared navigation bar across all pages
- Loading and error handling states
- Reusable React components

---

## Project Structure

```
app/
├── layout.js               # Root layout (shared across all pages)
├── page.js                 # Homepage — latest posts grid
├── globals.css             # Global styles
├── about/
│   └── page.js             # About page
├── contact/
│   └── page.js             # Contact page
└── posts/
    └── [slug]/
        └── page.js         # Dynamic single post page

components/
├── Header.jsx              # Navigation bar
├── Hero.jsx                # Hero/banner section
├── PostCard.jsx            # Individual post card
└── PostsGrid.jsx           # Blog post grid layout

lib/
└── wordpress.js            # GraphQL queries and fetch helpers
```

---

## Part 1: WordPress + Elementor Setup

1. Install [XAMPP](https://www.apachefriends.org/) and start Apache + MySQL.
2. Place WordPress in `htdocs/webstack-assessment` and complete the standard install.
3. In the WordPress admin, install and activate:
   - **Elementor** (free version)
   - **WPGraphQL**
4. Create at least 6 blog posts with featured images.
5. Build the homepage in Elementor to match the provided mockup.
6. The GraphQL endpoint will be available at:
   ```
   http://localhost:8080/webstack-assessment/graphql
   ```

---

## Part 2: Next.js Frontend Setup

### Prerequisites

- Node.js 18+
- WordPress running locally (see Part 1)

### Installation

1. Navigate to the Next.js project folder:
   ```bash
   cd webstack-next
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root:
   ```env
   NEXT_PUBLIC_WORDPRESS_API_URL=http://localhost:8080/webstack-assessment/graphql
   ```

4. Start the development server:
   ```bash
   npx next dev --turbopack
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## GraphQL Usage

All WordPress data is fetched via WPGraphQL — the REST API is not used. Example query used on the homepage:

```graphql
query GetLatestPosts {
  posts(first: 6) {
    nodes {
      id
      title
      slug
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
    }
  }
}
```

---

## Deliverables

- [x] GitHub repository with full source code
- [x] This README with setup instructions
- [x] Screenshots of both the WordPress/Elementor version and the Next.js frontend
- [x] Demo video showcasing setup and functionality

---

## Notes

- The WordPress instance is local. The Next.js app fetches from `localhost` by default.
- To deploy publicly, WordPress would need to be hosted online, and `NEXT_PUBLIC_WORDPRESS_API_URL` updated accordingly.
- Deployment of the Next.js app can be done via [Vercel](https://vercel.com) with a single `git push`.

---

## Author

**Fidel Mudzamba**