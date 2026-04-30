# NC News

![React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-7-purple) ![React Router](https://img.shields.io/badge/React_Router-v7-orange)

NC News is a front-end news application where users can browse articles, filter by topic or author, vote on articles, leave comments, and vote on comments.

## Features

- Browse all articles on the homepage
- Filter articles by topic using the side menu or nav
- Search articles by author or keyword
- Sort articles (e.g. by date, votes)
- Read individual article pages with full content and author info
- Vote on articles (upvote / downvote)
- Read, post, and delete comments
- Vote on comments
- View your user profile page

## Tech Stack

- **React 19** — UI framework
- **React Router v7** — client-side routing
- **Vite** — development server and bundler
- **Lucide React** — icons

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** — v18 or higher recommended ([nodejs.org](https://nodejs.org))
- **npm** — comes bundled with Node.js

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/nc-news.git
cd nc-news
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The app will be available at http://localhost:5173 by default.

> No environment variables are needed. The app connects to a hosted REST API at `https://nc-news-oc7g.onrender.com/api`.

## Available Scripts

- `npm run dev` — start the local development server
- `npm run build` — build the project for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across the project

## Project Structure

```
src/
├── api/                        # Functions for all API calls
│   ├── fetchArticles.js        # Fetch all articles (optionally by topic)
│   ├── fetchArticleById.js     # Fetch a single article
│   ├── fetchComments.js        # Fetch comments for an article
│   ├── fetchTopics.js          # Fetch all topics
│   ├── fetchUsers.js           # Fetch user data
│   ├── patchArticle.js         # Update article votes
│   ├── postComment.js          # Post a new comment
│   └── deleteComment.js        # Delete a comment
│
├── components/
│   ├── homepage/
│   │   ├── AllArticles.jsx     # Main article listing page
│   │   ├── ArticleCard.jsx     # Individual article preview card
│   │   └── SortButton.jsx      # Sorting controls
│   │
│   ├── article-page/
│   │   ├── ArticlePage.jsx     # Article page layout
│   │   ├── Article.jsx         # Article body and content
│   │   ├── Author.jsx          # Author info display
│   │   ├── VoteButtons.jsx     # Upvote/downvote controls
│   │   ├── Comments.jsx        # Comment list
│   │   ├── CommentBox.jsx      # Individual comment display
│   │   └── PostComment.jsx     # Form to submit a new comment
│   │
│   ├── logged-in-user/
│   │   └── UserPage.jsx        # Logged-in user profile page
│   │
│   ├── Header.jsx              # Site header with navigation
│   ├── Nav.jsx                 # Navigation links
│   ├── SearchBar.jsx           # Article/author search
│   ├── SideMenu.jsx            # Topic filter side menu
│   ├── TopArticles.jsx         # Featured/top articles
│   ├── LoggedInUserInfo.jsx    # User info display in header
│   └── AboutUs.jsx             # About page
│
├── contexts/
│   └── User.jsx                # Global logged-in user context
│
├── App.jsx                     # Route definitions
├── App.css
├── main.jsx                    # App entry point
└── index.css
```

## Back-end API

This is a front-end only project. It connects to the **NC News REST API**, which is hosted on Render. The back-end handles articles, topics, users, comments, and votes.

Back-end repository: https://github.com/Ines1299/NC-News

## Default User

The app currently uses a hardcoded logged-in user for demonstration purposes. The default account is:

- **Username:** `tickle122`
- **Name:** Tom Tickle

To change the default user, update `src/contexts/User.jsx`.
