# SEO Improvements Checklist for Trovill.com

✅ = **Completed**  
⚠️ = **Requires Action**  
ℹ️ = **Recommendation**

---

## ✅ 1. Domain Configuration
- [x] CNAME file configured with `trovill.com`
- [x] Replaced all GitHub Pages URLs with `https://trovill.com`
- [x] Updated `_config.yml` with production domain
- [x] Set `baseurl` to empty string

---

## ✅ 2. Meta Tags & SEO Fundamentals

### Homepage (index.html)
- [x] Title tag optimized: `Trovill – Modern Western-Style Apparel from Berlin`
- [x] Meta description (159 chars): Full sentence, brand-focused, includes keywords
- [x] Keywords updated: `trovill, berlin fashion brand, modern western-style apparel, menswear, shirts, polos`
- [x] Canonical URL added: `https://trovill.com/`
- [x] Open Graph tags updated with production URLs
- [x] Twitter Card tags updated with production URLs
- [x] Proper H1 with text: "Trovill – Modern Western-Style Apparel from Berlin"

### Privacy Policy Page
- [x] Title: `Privacy Policy | Trovill`
- [x] Specific meta description for privacy page
- [x] Canonical URL: `https://trovill.com/privacy-policy.html`
- [x] Internal links use root-relative paths (`/privacy-policy.html`)

### Thank You Page
- [x] Added `noindex, nofollow` meta tag (utility page)
- [x] Canonical URL added

---

## ✅ 3. Structured Data (JSON-LD)

- [x] Schema.org Organization markup added to homepage
- [x] Includes:
  - Organization name, description, URL
  - Logo reference
  - Social media profiles (Instagram, Facebook, LinkedIn)
  - Founding date: 2024
  - Industry: Fashion
  - Address (Berlin, Germany)
- [x] Updated `schema.json` with production URLs

---

## ✅ 4. Content Optimization

- [x] **Brand Story Section Added**: 110-word paragraph with:
  - Brand name mentioned multiple times
  - Key phrases: "Berlin-based fashion brand", "modern Western-style apparel"
  - Product categories: menswear, shirts, polos, knit, woven
  - Styling added for readability
- [x] H1 contains actual text (not just logo image)
- [x] Logo has proper alt text: "Trovill logo"
- [x] Content is keyword-rich but natural

---

## ✅ 5. Technical SEO

### Sitemap
- [x] Updated `sitemap.xml` with production URLs
- [x] Added privacy-policy.html to sitemap
- [x] Updated lastmod dates to 2026-01-22
- [x] Set proper priority (1.0 for homepage, 0.5 for privacy)

### Robots.txt
- [x] Updated Sitemap URL to `https://trovill.com/sitemap.xml`
- [x] Removed crawl-delay (was limiting indexing)
- [x] Disallowed README.md from crawling
- [x] Allowed all pages by default

### Headers File
- [x] Created `_headers` with:
  - Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
  - Cache-Control directives
  - Performance optimizations

---

## ✅ 6. Internal Linking

- [x] Privacy policy link uses root-relative path: `/privacy-policy.html`
- [x] Thank you page links back to home: `/`
- [x] All internal navigation is consistent

---

## ✅ 7. Jekyll Configuration

- [x] Title: `Trovill – Modern Western-Style Apparel`
- [x] Description: Brand-focused, mentions Berlin, Western-style apparel, knit/woven
- [x] Production URL: `https://trovill.com`
- [x] Empty baseurl for root deployment

---

## ✅ 8. Code Cleanup

- [x] Removed duplicate `success.html` (kept `thank-you.html`)
- [x] All social media URLs verified:
  - Instagram: `https://www.instagram.com/trovill.fashion/`
  - Facebook: `https://www.facebook.com/trovill`
  - LinkedIn: `https://www.linkedin.com/company/trovill/`

---

## ⚠️ 9. Action Required

### Critical
1. **Create Open Graph Image**
   - Current reference: `https://trovill.com/assets/og-image.jpg`
   - Recommended size: 1200x630px
   - Should include brand logo and tagline
   - Place in `/assets/` directory

2. **Verify DNS Configuration**
   - Ensure `trovill.com` points to GitHub Pages
   - Add both `www` and root domain records
   - Enable HTTPS in GitHub Pages settings

### Important
3. **Submit to Search Engines**
   - Google Search Console: https://search.google.com/search-console
   - Bing Webmaster Tools: https://www.bing.com/webmasters
   - Submit sitemap: `https://trovill.com/sitemap.xml`

4. **Set Up Analytics**
   - Add Google Analytics or Plausible Analytics
   - Track visitor behavior and conversions
   - Monitor email signups

---

## ℹ️ 10. Additional Recommendations

### Content Enhancement
- [ ] Add FAQ section addressing common questions about:
  - Shipping to different countries
  - Size guide for Western-style apparel
  - Material sourcing and sustainability practices
  - Launch timeline details

- [ ] Create blog section for:
  - Behind-the-scenes content
  - Western fashion style guides
  - Brand story deep-dive
  - Sustainable fashion topics

### Social Proof
- [ ] Add customer testimonials section (when available)
- [ ] Display social media feed integration
- [ ] Show number of waitlist signups (builds urgency)

### Performance
- [ ] Optimize images (use WebP format)
  - Current: `/assets/background.png` and `/assets/background1.png`
  - Convert to WebP and use `<picture>` element with fallbacks
- [ ] Minify CSS and JavaScript for production
- [ ] Consider using a CDN for static assets

### Local SEO (Berlin)
- [ ] Add complete business address when available
- [ ] Create Google Business Profile
- [ ] Add "Berlin fashion" to more content naturally
- [ ] Consider German language version (`/de/` path)

### Social Media
- [ ] Verify Twitter/X account and add handle to meta tags
- [ ] Add Pinterest Rich Pins markup
- [ ] Create brand hashtag strategy (#TrovillFashion)

### Accessibility (Also helps SEO)
- [ ] Add ARIA labels where needed
- [ ] Ensure keyboard navigation works
- [ ] Test with screen readers
- [ ] Check color contrast ratios

### Conversion Optimization
- [ ] A/B test email signup button text
- [ ] Add social proof ("Join 500+ others on the waitlist")
- [ ] Consider exit-intent popup for last-chance signup
- [ ] Add referral program (share with friends incentive)

---

## 📊 Testing & Validation

### Run These Tests
1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
   - Target: 90+ for both mobile and desktop

2. **Google Rich Results Test**: https://search.google.com/test/rich-results
   - Verify JSON-LD structured data

3. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
   - Ensure responsive design works

4. **Schema Markup Validator**: https://validator.schema.org/
   - Paste structured data to validate

5. **Broken Link Checker**: Use Screaming Frog or similar
   - Ensure no 404s

6. **Open Graph Debugger**: 
   - Facebook: https://developers.facebook.com/tools/debug/
   - LinkedIn: https://www.linkedin.com/post-inspector/

---

## 🎯 Expected SEO Impact

### Short Term (1-2 weeks)
- ✅ Proper indexing by Google
- ✅ Rich snippets in search results (Organization schema)
- ✅ Better CTR from improved titles and descriptions

### Medium Term (1-3 months)
- Ranking for "Trovill" brand searches
- Appearance for "Berlin fashion brand" queries
- "Modern western-style apparel" local/brand awareness

### Long Term (3-6 months)
- Establish authority in niche
- Backlinks from fashion blogs/press
- Strong brand presence in Germany
- Growing organic traffic

---

## 📝 Notes

- All GitHub Pages URLs successfully replaced
- Domain is properly configured with CNAME
- Structured data follows schema.org best practices
- Meta descriptions are under 160 characters
- All internal links use root-relative paths
- Security headers configured for production

**Last Updated**: January 22, 2026  
**Status**: Ready for production deployment ✅

---

## 🚀 Deployment Checklist

Before going live:
- [ ] Verify CNAME file is in repository root
- [ ] Push all changes to `main` branch
- [ ] Enable GitHub Pages in repository settings
- [ ] Verify HTTPS is enabled
- [ ] Test all pages at trovill.com
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor for 404 errors in first 48 hours

---

**Questions or issues?** Contact: info@trovill.com
