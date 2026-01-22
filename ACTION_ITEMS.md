# Quick Action Items for Trovill.com

Items that need your attention before going fully live.

---

## 🚨 CRITICAL: Create Open Graph Image

### What You Need:
An image file named `og-image.jpg` in the `/assets/` directory.

### Specifications:
- **Dimensions**: 1200 x 630 pixels (exactly)
- **Format**: JPG or PNG
- **File size**: Under 1MB (preferably under 500KB)
- **Content**: Should include:
  - Trovill logo
  - Tagline: "Modern Western-Style Apparel from Berlin"
  - Brand colors (gold and black)
  - Clean, professional design

### Design Suggestions:
```
┌─────────────────────────────────────┐
│                                     │
│         [TROVILL LOGO]              │
│                                     │
│   Modern Western-Style Apparel      │
│         from Berlin                 │
│                                     │
│   🌟 Launching Spring 2026 🌟      │
│                                     │
└─────────────────────────────────────┘
```

### Tools to Create It:
1. **Canva** (recommended - has OG image templates): https://www.canva.com/
2. **Figma** (for designers): https://www.figma.com/
3. **Adobe Photoshop/Illustrator**
4. **Hire on Fiverr**: Search "open graph image design"

### Where to Place It:
```
/Users/rajdilawar/trovillComingSoon/assets/og-image.jpg
```

### Test It After Upload:
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Inspector: https://www.linkedin.com/post-inspector/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

---

## 📍 Verify DNS & GitHub Pages Setup

### Check These Settings:

#### 1. DNS Records (at your domain registrar):
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: [yourusername].github.io
```

#### 2. GitHub Repository Settings:
1. Go to repository: `https://github.com/rajdilawar/trovill-coming-soon`
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Verify:
   - ✅ Source: Deploy from `main` branch
   - ✅ Custom domain: `trovill.com`
   - ✅ Enforce HTTPS: ✓ (checked)

### Test Your Domain:
```bash
# Check if domain resolves correctly
nslookup trovill.com

# Check if HTTPS works
curl -I https://trovill.com
```

---

## 🔍 Submit to Search Engines

### Google Search Console

1. **Go to**: https://search.google.com/search-console
2. **Add Property**: Enter `https://trovill.com`
3. **Verify Ownership** via HTML file method:
   - Download verification file
   - Upload to repository root
   - Click "Verify"
4. **Submit Sitemap**:
   - Go to "Sitemaps" in left menu
   - Enter: `https://trovill.com/sitemap.xml`
   - Click "Submit"

### Bing Webmaster Tools

1. **Go to**: https://www.bing.com/webmasters
2. **Add Site**: Enter `https://trovill.com`
3. **Import from Google Search Console** (easiest method)
   - Or verify via HTML meta tag
4. **Submit Sitemap**: `https://trovill.com/sitemap.xml`

---

## 📊 Set Up Analytics

### Option 1: Google Analytics (Most Popular)

#### Setup Steps:
1. Go to: https://analytics.google.com/
2. Create account for "Trovill"
3. Create property for "trovill.com"
4. Get tracking code (looks like `G-XXXXXXXXXX`)

#### Add to Your Site:
Add this to `<head>` section of all HTML pages:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Option 2: Plausible Analytics (Privacy-Friendly Alternative)

#### Why Consider It:
- ✅ GDPR compliant by default
- ✅ No cookie banner needed
- ✅ Lightweight (< 1KB script)
- ✅ Simple, beautiful dashboard
- 💰 $9/month

#### Setup:
1. Sign up: https://plausible.io/
2. Add site: `trovill.com`
3. Add one line to `<head>`:

```html
<script defer data-domain="trovill.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🧪 Testing Checklist

Before announcing the site is live, test everything:

### Functionality Tests:
```
□ Homepage loads at https://trovill.com
□ www.trovill.com redirects to trovill.com (or vice versa)
□ HTTPS works (no security warnings)
□ Email signup form works
□ Privacy policy page loads
□ Thank you page loads
□ All social media links work
□ Mobile version displays correctly
□ Logo and images load properly
```

### SEO Tests:
```
□ Run Google PageSpeed Insights
   → https://pagespeed.web.dev/
   → Target: 85+ score

□ Test Rich Results
   → https://search.google.com/test/rich-results
   → Paste: https://trovill.com
   → Should show Organization schema

□ Validate Structured Data
   → https://validator.schema.org/
   → Should have 0 errors

□ Check Mobile-Friendliness
   → https://search.google.com/test/mobile-friendly
   → Should pass

□ Test Open Graph Tags
   → Facebook: https://developers.facebook.com/tools/debug/
   → Should show correct image, title, description
```

### Browser Testing:
```
□ Chrome (desktop & mobile)
□ Safari (desktop & mobile)
□ Firefox
□ Edge
```

---

## 📧 Email Setup (Optional but Recommended)

### Professional Email Addresses

Instead of using personal email, set up:
- info@trovill.com
- hello@trovill.com
- support@trovill.com

### Options:

#### 1. Google Workspace (Business Gmail)
- **Cost**: $6/user/month
- **Link**: https://workspace.google.com/
- **Includes**: Gmail, Drive, Calendar
- **Professional**: ✅

#### 2. Zoho Mail (Budget Option)
- **Cost**: Free for 1 user (lite) or $1/user/month
- **Link**: https://www.zoho.com/mail/
- **Good for**: Startups

#### 3. Forward to Existing Email
- **Cost**: Free
- **How**: Set up email forwarding through DNS
- **Downside**: Can't reply from @trovill.com address

---

## 🎨 Content Improvements (When You Have Time)

### Create These Pages (Future):

#### 1. About Page (`/about.html`)
```html
- Company story
- Founder background
- Berlin connection
- Design philosophy
- Sustainability commitment
```

#### 2. Products Preview (`/collection.html`)
```html
- Teaser images of upcoming products
- Product categories
- "Coming soon" with dates
- Email signup for early access
```

#### 3. Blog Section (`/blog/`)
```html
- "The Story Behind Trovill"
- "Western Fashion Meets Berlin Style"
- "Our Sustainable Sourcing Journey"
- "Behind the Scenes: Creating Our First Collection"
```

Each blog post = more SEO opportunities!

---

## 🔗 Build Backlinks

### Quick Wins:

#### 1. Social Media Profiles
Update bio/about section on:
- ✅ Instagram → Link to trovill.com
- ✅ Facebook → Add website
- ✅ LinkedIn Company Page → Add website
- Add Pinterest, TikTok if relevant

#### 2. Business Directories
Submit to:
- Google Business Profile (critical for local SEO)
- Bing Places
- Yelp (if applicable)
- Fashion directories

#### 3. Press & Features
Reach out to:
- Berlin fashion bloggers
- Startup press (TechCrunch, ProductHunt if relevant)
- Fashion magazines
- Local Berlin press

Template Email:
```
Subject: Introducing Trovill – Modern Western-Style Apparel from Berlin

Hi [Name],

I'm launching Trovill, a Berlin-based fashion brand creating modern 
Western-style apparel for men. We combine rugged Western aesthetics 
with refined European tailoring.

Launching Spring 2026. Would you be interested in covering our story?

Best,
[Your Name]
Trovill
https://trovill.com
```

---

## 📱 Social Media Optimization

### Instagram (trovill.fashion)

**Bio Update:**
```
🌟 Trovill – Modern Western-Style Apparel
📍 Designed in Berlin
🧵 Timeless pieces, crafted with soul
🚀 Launching Spring 2026
👇 Join the waitlist
```

**Link in Bio:**
```
https://trovill.com
```

**Hashtag Strategy:**
```
#Trovill #TrovillFashion #BerlinFashion #WesternStyle 
#MensFashion #MensWear #SustainableFashion #SlowFashion
#TimelessStyle #BerlinBrand #FashionStartup #ComingSoon2026
```

### LinkedIn Company Page

**About Section:**
Include keyword-rich description and link to trovill.com

**Post Frequency:**
- Share behind-the-scenes content
- Design process
- Material sourcing stories
- Berlin inspiration

---

## ⚡ Quick Wins for More SEO

### 1. Add Breadcrumbs (Future)
When you have multiple pages:
```html
Home > Collection > Shirts
```

### 2. Add FAQ Schema (Future)
When you create FAQ section:
```json
{
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

### 3. Optimize Images
```bash
# Install ImageOptim (Mac) or TinyPNG (web)
# Compress all images in /assets/
# Target: < 200KB per image
```

### 4. Add Alt Text to All Images
Currently missing for some images - add descriptive alt text.

---

## 🎯 Track These Metrics

### Week 1:
- Site indexed by Google? (Search: site:trovill.com)
- Any 404 errors?
- Signups received?
- Page load speed?

### Monthly:
- Organic search traffic (Google Analytics)
- Keyword rankings (Google Search Console)
- Backlinks (Google Search Console)
- Email list growth

---

## 🆘 Common Issues & Solutions

### Issue: Site not loading at trovill.com
**Solution:** Check DNS propagation at https://dnschecker.org/

### Issue: HTTPS not working
**Solution:** In GitHub Settings → Pages → Wait 24h after enabling HTTPS

### Issue: OG image not showing on social media
**Solution:** 
1. Verify image exists at correct URL
2. Clear cache: https://developers.facebook.com/tools/debug/
3. Check image size is 1200x630px

### Issue: Not showing in Google after 2 weeks
**Solution:**
1. Verify sitemap submitted to Search Console
2. Check for "Coverage" errors in Search Console
3. Request indexing for main page

---

## ✅ Pre-Launch Checklist

The night before announcing:

```
□ Domain loads correctly
□ HTTPS enabled
□ og-image.jpg uploaded and working
□ Email signup form tested
□ All social links correct
□ Analytics installed
□ Sitemap submitted to Google
□ Mobile version tested
□ Told your friends to check it out
□ Prepared social media announcement posts
□ Have champagne ready to celebrate 🍾
```

---

## 🎉 Launch Day Checklist

```
□ Post announcement on Instagram
□ Post on LinkedIn
□ Post on Facebook
□ Email existing contacts
□ Post in relevant fashion/startup communities
□ Update all social media bios with link
□ Monitor website for issues
□ Respond to feedback
□ Celebrate! 🎊
```

---

## 📞 Support

If you have questions about any of these action items:
- **Technical SEO questions**: Search on Google or StackOverflow
- **Design help**: Canva tutorials on YouTube
- **Domain issues**: Contact your domain registrar support
- **GitHub Pages issues**: GitHub documentation

---

## 🎯 Priority Order

**Do These First:**
1. ✅ Create og-image.jpg (30 minutes)
2. ✅ Verify DNS & GitHub Pages (10 minutes)
3. ✅ Test site at trovill.com (15 minutes)

**Do Within First Week:**
4. Submit to Google Search Console (20 minutes)
5. Set up Analytics (20 minutes)
6. Test all functionality (30 minutes)

**Do When You Have Time:**
7. Build backlinks (ongoing)
8. Create additional content (ongoing)
9. Monitor metrics (weekly)

---

**You've got this!** 🚀

The hard SEO work is done. These action items are straightforward and will have your site fully optimized and ready to dominate search results.

Good luck with the Trovill launch! 🎉
