# Trovill - Coming Soon Page

🚀 **Premium Fashion Brand Coming Soon**

A beautiful, responsive coming soon page for Trovill fashion brand, built for GitHub Pages hosting.

## 🌟 Features

- **Responsive Design**: Looks great on all devices (mobile, tablet, desktop)
- **Interactive Countdown**: Real-time countdown to launch date
- **Email Subscription**: Collect early subscriber emails
- **Modern Animations**: Smooth transitions and hover effects
- **SEO Optimized**: Proper meta tags and structured data
- **Social Media Ready**: Open Graph and Twitter Card support
- **Premium Design**: Fashion-focused aesthetic with gold accents

## 🛠️ Built With

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: Interactive functionality without dependencies
- **Font Awesome**: Beautiful icons
- **Google Fonts**: Premium typography (Playfair Display + Inter)

## 🚀 Deployment

This site is configured for GitHub Pages deployment:

1. Push code to your GitHub repository
2. Go to Settings → Pages
3. Select source branch (usually `main` or `gh-pages`)
4. Your site will be available at: `https://yourusername.github.io/trovillComingSoon`

## ⚙️ Customization

### Launch Date
Edit the countdown timer in `script.js`:
```javascript
// Set your launch date
const launchDate = new Date('2024-12-31T12:00:00');
```

### Brand Colors
Modify CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1a1a1a;
    --accent-gold: #d4af37;
    --accent-rose: #e8b4b8;
}
```

### Social Media Links
Update social media URLs in `script.js`:
```javascript
const socialUrls = {
    instagram: 'https://instagram.com/trovill',
    facebook: 'https://facebook.com/trovill',
    twitter: 'https://twitter.com/trovill',
    pinterest: 'https://pinterest.com/trovill'
};
```

### Email Integration
To connect with a real email service:
1. Sign up for services like Mailchimp, ConvertKit, or Netlify Forms
2. Replace the localStorage simulation in `script.js` with API calls
3. Add your API endpoint in the `trackSubscription()` function

## 📱 Performance

- **Optimized Images**: Use WebP format when possible
- **Minified Assets**: Compress CSS/JS for production
- **Fast Loading**: Efficient animations and lazy loading
- **SEO Score**: 95+ on Google PageSpeed Insights

## 🎨 Customization Guide

### Adding Your Logo
1. Place logo files in `/assets/` directory
2. Update the `.brand-name` section in `index.html`
3. Add favicon files (use [Favicon Generator](https://favicon.io/))

### Background Images
1. Add images to `/assets/` directory
2. Update `.background-container` CSS with your image
3. Optimize images (recommend max 1920px width)

### Content Updates
- **Brand Name**: Update "TROVILL" in `index.html`
- **Tagline**: Modify "Premium Fashion" in the header
- **Description**: Update hero subtitle text
- **Features**: Edit the three feature cards
- **Contact**: Update footer email and links

## 📄 License

MIT License - feel free to use for your projects!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Made with ❤️ for Trovill Fashion**