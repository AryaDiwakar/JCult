# Typography Documentation

## Font Families

### Base Font (Inter)
- **Class**: `.font-base`
- **Font**: Inter (sans-serif)
- **Usage**: Default body font, applied globally
- **CSS Variable**: `var(--font-tt-commons)`

### Brand Font (Raleway)
- **Class**: `.font-brand`
- **Font**: Raleway (sans-serif)
- **Usage**: Headings, titles, and brand elements
- **CSS Variable**: `var(--font-raleway)`

---

## Font Weights

| Class | Weight | Value |
|-------|--------|-------|
| `.fw-light` | Light | 300 |
| `.fw-normal` | Normal | 400 |
| `.fw-medium` | Medium | 500 |
| `.fw-semibold` | Semibold | 600 |
| `.fw-bold` | Bold | 700 |

---

## Responsive Font Sizes

### Hero Title
**Class**: `.text-hero-title`

| Breakpoint | Size |
|------------|------|
| Mobile (320px) | 40px |
| Tablet (768px) | 48px |
| Desktop (1024px) | 64px |

**Usage**: Main hero section title

---

### Hero Subtitle
**Class**: `.text-hero-subtitle`

| Breakpoint | Size |
|------------|------|
| All sizes | 20px |

**Usage**: Subtitle text in hero section (inside green glassy background)

---

### Section Label
**Class**: `.text-section-label`

| Breakpoint | Size |
|------------|------|
| Mobile (320px) | 18px |
| Tablet (768px) | 16px |
| Desktop (1024px) | 16px |

**Usage**: Small uppercase labels like "Who We Are"

---

### Section Paragraph
**Class**: `.text-section-para`

| Breakpoint | Size |
|------------|------|
| Mobile (320px) | 24px |
| Tablet (768px) | 24px |
| Desktop (1024px) | 32px |

**Usage**: Large paragraph text next to section labels

---

### Stats Number
**Class**: `.text-stats-number`

| Breakpoint | Size |
|------------|------|
| Mobile (320px) | 46px |
| Tablet (768px) | 66px |
| Desktop (1024px) | 75px |

**Usage**: Large numbers in statistics sections (e.g., "2025", "$10M")

---

### Stats Description
**Class**: `.text-stats-desc`

| Breakpoint | Size |
|------------|------|
| Mobile (320px) | 16px |
| Tablet (768px) | 16px |
| Desktop (1024px) | 18px |

**Usage**: Description text below stats numbers

---

### Section Title
**Class**: `.text-section-title`

| Breakpoint | Size |
|------------|------|
| Mobile (320px) | 40px |
| Tablet (768px) | 40px |
| Desktop (1024px) | 48px |

**Usage**: Section headings like "Pioneering the Future of Finance"

---

### Section Content
**Class**: `.text-section-content`

| Breakpoint | Size |
|------------|------|
| All sizes | 20px |

**Usage**: Paragraph content in sections

---

### Button Text
**Class**: `.text-button`

| Breakpoint | Size |
|------------|------|
| All sizes | 16px |

**Usage**: Text inside buttons

---

## Usage Examples

### Hero Section
```html
<h1 class="text-hero-title font-brand">
  United, we convert aspiration into strategic execution
</h1>
<p class="text-hero-subtitle">
  Built on the pursuit of identifying under-recognised market opportunities...
</p>
```

### Who We Are Section
```html
<h3 class="text-section-label">Who We Are</h3>
<p class="text-section-para font-brand">
  We aspire to establish an unprecedented legacy...
</p>
```

### Stats Section
```html
<div class="text-stats-number font-brand">2025</div>
<p class="text-stats-desc">Date founded by Managing Director</p>
```

### Section with Title
```html
<h2 class="text-section-title font-brand">
  Pioneering the Future of Finance
</h2>
<p class="text-section-content">
  Innovation is the core of our competitive advantage...
</p>
```

### Button
```html
<button class="text-button">Contact Us</button>
```

---

## Best Practices

1. **Always use `.font-brand`** for headings, titles, and numbers
2. **Body text** automatically uses Inter (font-base)
3. **Combine font size and font family classes** for proper styling
4. **Use semantic HTML** (h1, h2, p) along with utility classes
5. **Responsive by default** - all text classes adapt to screen size

---

## Breakpoints Reference

| Name | Min Width |
|------|-----------|
| Mobile | 320px |
| Tablet | 768px |
| Desktop | 1024px |
