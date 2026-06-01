# Interactive Navigation Menu - Landing Page

## Project Overview
This is a responsive landing page with an interactive navigation menu that includes scroll effects and hover animations. Perfect for internship programs, corporate websites, and professional portfolios.

## Features

### 1. **Navigation Menu**
- Fixed position at the top of the page
- Logo/Brand name with hover effects
- 5 main menu items (Home, About, Programs, Testimonials, Contact)
- "Apply Now" button with special styling
- Visible on all pages as users scroll

### 2. **Scroll Detection**
- **Background Color Change**: When users scroll down more than 100px, the navbar automatically changes color
  - Default state: White background with dark text
  - Scrolled state: Blue background (#0d47a1) with white text
- **Logo Color Change**: Logo color changes to gold (#ffd700) when scrolled
- **Apply Button Style Change**: Button styling updates to match scrolled state

### 3. **Hover Effects**
- **Menu Items**: Underline animation and color change on hover
- **Program Cards**: Shadow effect and elevation on hover
- **Testimonial Cards**: Shadow effect and left border on hover
- **Links**: Color transitions with smooth animations
- **Buttons**: Scale and shadow effects on hover

### 4. **Mobile Responsiveness**
- Hamburger menu icon appears on screens smaller than 768px
- Mobile-friendly menu that slides down
- Properly sized text and buttons for small screens
- Touch-friendly navigation

### 5. **Additional Interactivity**
- **Active Link Highlighting**: Current section is highlighted in the menu
- **Smooth Scrolling**: Anchor links smoothly scroll to sections
- **Form Validation**: Application form validates email and required fields
- **Success Message**: Confirmation message appears after form submission
- **Fade-in Animations**: Elements animate in as they enter viewport

## File Structure

```
landing-page.html      # HTML structure with all sections
landing-page.css       # Styling and animations
landing-page.js        # JavaScript for interactivity
```

## How to Use

1. **Open the HTML File**
   - Double-click `landing-page.html` or open in your browser
   - Or use a local server (recommended for best experience)

2. **Test the Features**
   - Scroll down to see navbar color change
   - Hover over menu items to see animations
   - Hover over cards to see shadow effects
   - Resize the browser to test responsive design
   - Click the hamburger menu on mobile sizes

3. **Customize the Content**
   - Edit the company name in `<div class="navbar-brand">`
   - Update section titles and descriptions
   - Modify the program cards content
   - Add testimonials
   - Customize colors in CSS

## Customization Guide

### Change Navbar Colors
In `landing-page.css`, find these sections:
- `.navbar.scrolled` - Change background color when scrolled
- `.nav-link` - Change menu item colors
- `.logo` - Change brand name color

```css
.navbar.scrolled {
    background-color: rgba(13, 71, 161, 0.95); /* Change this */
}
```

### Add New Menu Items
In `landing-page.html`, add new items to the nav menu:
```html
<li class="nav-item">
    <a href="#new-section" class="nav-link">New Item</a>
</li>
```

### Change Scroll Trigger Point
In `landing-page.js`, modify the scroll threshold:
```javascript
if (window.scrollY > 100) { // Change 100 to desired pixel value
```

### Add New Sections
1. Add new section in HTML
2. Style it in CSS
3. Add observer effect in JS (optional)

## Color Scheme

- **Primary Blue**: #0d47a1
- **Secondary Blue**: #1565c0
- **Gold Accent**: #ffd700
- **Light Background**: #f5f5f5, #f0f7ff
- **Text**: #333

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Responsive Breakpoints

- **Desktop**: 769px and above - Full menu visible
- **Tablet**: 481px - 768px - Hamburger menu appears
- **Mobile**: 480px and below - Optimized for small screens

## Key JavaScript Features

1. **Scroll Event Listener**: Detects scroll position and toggles navbar class
2. **Active Link Tracking**: Updates active menu item based on scroll position
3. **Hamburger Toggle**: Opens/closes mobile menu
4. **Form Validation**: Checks email format and required fields
5. **Intersection Observer**: Animates elements as they enter viewport
6. **Smooth Scroll**: Animates anchor link navigation

## Hover Effects Summary

| Element | Hover Effect |
|---------|--------------|
| Menu Links | Underline appears, color changes |
| Program Cards | Shadow expands, card elevates |
| Testimonial Cards | Shadow expands, left border appears |
| CTA Button | Background color changes, elevates |
| Apply Button | Color and shadow effects |
| Form Inputs | Blue border with glow effect |

## Tips for Best Results

1. Use a local web server for development (VS Code Live Server recommended)
2. Test on multiple devices and screen sizes
3. Check console for any JavaScript errors
4. Customize colors to match your brand
5. Update content with your actual information
6. Add more sections as needed

## Future Enhancements

- Add dark mode toggle
- Integrate with backend for form submissions
- Add more animations
- Implement search functionality
- Add breadcrumb navigation
- Add accessibility features (ARIA labels)

## Notes

- All animations use smooth CSS transitions (0.3s ease)
- Menu changes color when scrolled past 100px threshold
- Mobile menu closes when a link is clicked
- Form validates email format
- Success message auto-hides after 4 seconds

---

**Created for Internship Program - Task 1: Responsive Landing Page**
