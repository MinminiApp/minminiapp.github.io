# Minmini Website

The official website for **Minmini**, a beautiful and easy-to-use Tamil Baby Names application. This website showcases the app's features, allows users to participate in polls, and provides links to download the app.

## 🌟 Features

- **Search & Explore:** Find names by letter, nakshatra, rashi, and meaning.
- **Polls & Opinions:** Create polls and get opinions from family and friends on your favorite name choices.
- **Favourites:** Save your favorite names and access them anytime.
- **Trending Names:** Discover popular and modern Tamil baby names.
- **Twin & Combo Names:** Find perfect matching names for twins and siblings.
- **100% Private:** Privacy-focused experience with no sign-up required for voting.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React](https://reactjs.org/)
- **Styling:** CSS-in-JS (styled-jsx) and Global CSS
- **Icons:** [Lucide React](https://lucide.dev/)
- **Carousel:** [Swiper](https://swiperjs.com/)
- **Linting & Formatting:** [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

## 📂 Project Structure

```text
├── public/               # Static assets (images, icons)
│   └── assets/images/    # Application images and screenshots
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── poll/         # Dynamic poll pages ([slug])
│   │   ├── globals.css   # Global styles
│   │   ├── layout.js     # Root layout with metadata
│   │   └── page.js       # Landing page
│   └── components/       # Reusable React components
│       ├── CTA.js
│       ├── FAQ.js
│       ├── Features.js
│       ├── Footer.js
│       ├── Hero.js
│       ├── Navbar.js
│       ├── Polls.js
│       ├── Reviews.js
│       ├── Screenshots.js
│       └── Stats.js
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Nila-Studios/minmini-website.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd minmini-website
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production application:

```bash
npm run build
```

## 📄 License

This project is private. All rights reserved.
