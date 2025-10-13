# La Cabana - Wine Bar Website

A beautiful, modern wine bar website built with React and Vite, inspired by Bar rique.

## Features

- ✨ Responsive design that works on all devices
- 🎨 **Dynamic theme system** - Change colors and fonts from a single file (`src/theme.js`)
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 📱 Mobile-friendly menu
- 🍷 Beautiful sections for wine bar, restaurant, services, and events

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Customization

### Changing Colors and Fonts

All theme settings are centralized in `src/theme.js`. You can easily customize:

- **Colors**: Primary, secondary, background, text colors, etc.
- **Fonts**: Change font families for headings and body text
- **Font Sizes**: Adjust typography scale
- **Spacing**: Modify spacing values throughout the site
- **Shadows**: Update box shadow values
- **Transitions**: Change animation speeds

Example of changing the primary color:
```javascript
// In src/theme.js
colors: {
  primary: '#8B4513', // Change this to any color you want
  // ...
}
```

Example of changing fonts:
```javascript
// In src/theme.js
fonts: {
  primary: "'Your Heading Font', serif",
  secondary: "'Your Body Font', sans-serif",
  // ...
}
```

### Project Structure

```
laCabana/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Top navigation bar
│   │   ├── Hero.jsx          # Hero section with main banner
│   │   ├── About.jsx         # About section
│   │   ├── Services.jsx      # Services section
│   │   ├── Events.jsx        # Events/news section
│   │   ├── Careers.jsx       # Careers section
│   │   ├── Contact.jsx       # Contact form and info
│   │   └── Footer.jsx        # Footer with links
│   ├── theme.js              # ⭐ THEME CONFIGURATION FILE
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Components

- **Navigation**: Sticky navigation bar with smooth scroll
- **Hero**: Full-screen hero section with call-to-action buttons
- **About**: Information about the wine bar and restaurant
- **Services**: Showcases member cards, wine consultation, and staff services
- **Events**: Grid of current events and news
- **Careers**: Job opportunities section
- **Contact**: Newsletter signup form and contact information
- **Footer**: Site links and social media

## Technologies Used

- React 18
- Vite
- React Icons
- CSS-in-JS (inline styles with theme variables)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved.

