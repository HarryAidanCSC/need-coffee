# ☕ Harry's Coffee Blog

A modern, responsive coffee blog built with React and Vite, featuring coffee reviews, brewing guides, and coffee shop recommendations. The blog automatically generates articles from markdown files and deploys seamlessly to GitHub Pages.

## 🌐 Live Demo

Visit the live site: [https://harryaidancsc.github.io/need-coffee/](https://harryaidancsc.github.io/need-coffee/)

## ✨ Features

- **Dynamic Article Generation**: Automatically processes markdown files with metadata to create blog posts
- **Interactive Filtering**: Filter articles by type (beans, brewing, coffee shops) and star rating
- **Responsive Design**: Beautiful, modern UI that works on all devices (currently only optimised for desktop)
- **Image Gallery**: Automatic image processing and optimization
- **Star Rating System**: Rate and review coffee experiences
- **Search & Sort**: Advanced filtering and sorting capabilities

## 🚀 Tech Stack

- **Frontend**: React 19 with Vite
- **Routing**: React Router DOM with HashRouter (GitHub Pages compatible)
- **Styling**: CSS3 with modern gradients and animations
- **Icons**: React Icons
- **Deployment**: GitHub Pages with GitHub Actions
- **Content**: Markdown-based articles with JSON metadata

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── LandingPage/     # Homepage components
│   ├── BlogPage/        # Blog listing and filtering
│   ├── Article/         # Individual article view
│   └── About/           # About page
├── data/
│   └── Articles/        # Source articles (markdown + metadata)
└── assets/              # Static images and icons

public/
└── Articles/            # Generated articles and images
```

## 🛠️ Development

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HarryAidanCSC/need-coffee.git
   cd need-coffee
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Generate articles** (happens automatically with dev command)
   ```bash
   python create_articles.py
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server (auto-generates articles)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (manual)
- `npm run lint` - Run ESLint

## 📝 Adding New Articles

1. **Create a new folder** in `src/data/Articles/` with a descriptive name
2. **Add three files**:
   - `article_name.json` - Metadata (title, date, type, rating, etc.)
   - `article_name.md` - Article content in markdown
   - `image.jpg/png/webp` - Featured image

3. **Example metadata structure**:
   ```json
   {
     "title": "Harry's Coffee Shop Review",
     "date": "2025-05-24",
     "type": "coffee shop",
     "ranking": 4,
     "location": "Cambridge, UK",
     "alt": "Coffee shop interior",
     "quick_title": "Great Coffee from Harry's Coffe Shop",
     "text": "Short description"
   }
   ```

4. **Run the build process** to generate the article:
   ```bash
   python create_articles.py
   npm run dev
   ```

## 🚢 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. **Push to main branch** - Deployment happens automatically
2. **Check Actions tab** in your GitHub repository for build status
3. **Visit your site** at `https://yourusername.github.io/need-coffee/`

### Manual Deployment

```bash
npm run deploy
```

### Configuration

- **Base URL**: Configured in `vite.config.js` for GitHub Pages
- **GitHub Actions**: Workflow in `.github/workflows/deploy.yml`
- **Article Generation**: Automatically runs during build process

## 🎨 Customization

### Styling

- Global styles: `src/index.css`
- Component styles: Individual `.css` files alongside components
- Color scheme: Warm coffee-inspired browns, oranges, and creams

### Adding New Article Types

1. Update the filter logic in `BlogPage.jsx`
2. Add new color scheme in `getTypeColor()` function
3. Update filtering buttons and labels

### Content Management

Articles are managed through the file system:
- Add new articles by creating folders with markdown and metadata
- Images are automatically processed and optimized
- The build process generates a combined JSON file for the frontend

## 📧 Contact

Harry Mancinelli - [@MancinelliHarry](https://twitter.com/MancinelliHarry)

Project Link: [https://github.com/HarryAidanCSC/need-coffee](https://github.com/HarryAidanCSC/need-coffee)
