# SEO Post-Deployment Checklist

## ✅ Immediate Actions After Deployment

### 1. Google Search Console Setup
- [ ] Go to [Google Search Console](https://search.google.com/search-console)
- [ ] Add property for `https://biscaynevending.com`
- [ ] Verify ownership using the meta tag method
- [ ] Update verification code in `/src/lib/metadata.ts` line 93
- [ ] Submit sitemap: `https://biscaynevending.com/sitemap.xml`
- [ ] Request indexing for all pages:
  - [ ] Homepage (/)
  - [ ] Services (/services)
  - [ ] About (/about)
  - [ ] Contact (/contact)

### 2. Verify Technical SEO
- [ ] Visit `https://biscaynevending.com/sitemap.xml` - should display all 4 pages
- [ ] Visit `https://biscaynevending.com/robots.txt` - should allow all crawlers
- [ ] Visit `https://biscaynevending.com/manifest.json` - should show PWA config

### 3. Test Structured Data
- [ ] Go to [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test: `https://biscaynevending.com`
  - Should show: LocalBusiness, Organization, WebSite schemas
- [ ] Test: `https://biscaynevending.com/services`
  - Should show: FAQPage schema (11 questions)
- [ ] Test: `https://biscaynevending.com/about`
  - Should show: BreadcrumbList schema
- [ ] Test: `https://biscaynevending.com/contact`
  - Should show: BreadcrumbList schema

### 4. Mobile & Performance Testing
- [ ] [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
  - Test: `https://biscaynevending.com`
  - Should pass all mobile tests
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/)
  - Test: `https://biscaynevending.com`
  - Target: 90+ score on mobile and desktop

### 5. Social Media Preview Testing
- [ ] [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - Test all pages
  - Should show proper title, description, and OG image
- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - Test all pages
  - Should show large image card

## 🚀 Post-Launch SEO Tasks (Week 1)

### Google Business Profile
- [ ] Create/claim at [Google Business Profile](https://business.google.com)
- [ ] Add business info:
  - Name: Biscayne Vending
  - Category: Vending Machine Supplier
  - Phone: (786) 273-7007
  - Email: hello@biscaynevending.com
  - Service areas: Miami, Miami Beach, Aventura, Brickell, etc.
- [ ] Add photos of AI vending machines
- [ ] Add services (match website services page)
- [ ] Post updates about AI vending technology

### Local Directory Listings
Submit to these directories (use consistent NAP - Name, Address, Phone):
- [ ] [Yelp for Business](https://biz.yelp.com)
- [ ] [Yellow Pages](https://www.yellowpages.com/business-hub)
- [ ] [Bing Places](https://www.bingplaces.com)
- [ ] [Apple Maps](https://mapsconnect.apple.com)
- [ ] [Facebook Business Page](https://facebook.com/business)
- [ ] Miami Chamber of Commerce
- [ ] Local Miami business directories

### Analytics Setup
- [ ] Set up [Google Analytics 4](https://analytics.google.com)
  - Add tracking code to layout
  - Set up goals: Contact form submissions
- [ ] (Optional) Set up Google Tag Manager

## 📊 Ongoing SEO Monitoring (Monthly)

### Google Search Console
- [ ] Check for crawl errors
- [ ] Review search performance report
- [ ] Monitor keyword rankings for:
  - "AI vending machines Miami"
  - "smart vending machines Miami"
  - "vending machines Miami"
  - "contactless vending Miami"
- [ ] Fix any mobile usability issues
- [ ] Review coverage report for indexing issues

### Content Updates
- [ ] Check for keyword ranking opportunities
- [ ] Update blog or news section (if created)
- [ ] Respond to any customer reviews
- [ ] Update service descriptions with new features

## 🎯 SEO Growth Strategies (Quarterly)

### Content Marketing
- [ ] Create blog section
- [ ] Write articles about:
  - "Benefits of AI Vending Machines for Miami Businesses"
  - "How Contactless Vending Keeps Miami Offices Safe"
  - "The Future of Smart Vending in South Florida"
  - "ROI of AI Vending Machines for Your Business"

### Link Building
- [ ] Partner with Miami business associations
- [ ] Get featured in local news/blogs
- [ ] Create case studies with existing clients
- [ ] Guest post on business/tech blogs

### Local SEO Enhancement
- [ ] Get customer reviews on Google
- [ ] Create location-specific pages (if expanding)
- [ ] Partner with Miami influencers
- [ ] Sponsor local events (get backlinks)

## 🔍 Keyword Tracking

Monitor these keywords monthly in Google Search Console:

### Primary Keywords (Target: Top 3)
- AI vending machines Miami
- Smart vending machines Miami
- AI-powered vending Miami

### Secondary Keywords (Target: Top 5)
- Contactless vending machines Miami
- Intelligent vending solutions
- Miami vending machine services
- Smart cooler vending Miami

### Location Keywords (Target: Top 10)
- Vending machines Downtown Miami
- Vending machines Brickell
- Vending machines Miami Beach
- Vending machines Aventura
- Biscayne Boulevard vending

## 📈 Success Metrics

Track these KPIs:
- Organic search traffic (Google Analytics)
- Keyword rankings (Google Search Console)
- Click-through rate from search results
- Time on site from organic traffic
- Contact form submissions from organic search
- Google Business Profile views/clicks
- Number of backlinks (use Ahrefs/Moz)

## ⚠️ Common Issues to Watch For

### Indexing Issues
- Check if all pages are indexed: `site:biscaynevending.com` in Google
- Should show 4 main pages minimum

### Duplicate Content
- Ensure canonical tags are working
- No www vs non-www issues
- HTTPS everywhere (no mixed content)

### Technical Issues
- Monitor page load speed monthly
- Check for broken links
- Ensure mobile responsiveness
- Verify structured data is still valid

## 📞 Support Resources

- [Google Search Central](https://developers.google.com/search/docs)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org Documentation](https://schema.org)
- [Structured Data Testing](https://search.google.com/test/rich-results)

---

**Last Updated**: October 2025  
**Next Review**: December 2025
