# Accessibility

## Description

This project focuses on web accessibility (a11y) — making websites and web applications usable by everyone, including people with disabilities. The work is applied to **Techium**, a fictional company website, progressively improving it to meet modern accessibility standards.

Topics covered include:
- ARIA (Accessible Rich Internet Applications) roles and labels
- Keyboard navigation and focus management
- Visually hidden content for screen readers
- Semantic HTML structure
- Color contrast and visual accessibility
- Skip links and landmark regions

---

## Learning Objectives

By the end of this project, you should be able to explain:

- What ARIA is and its main purpose
- What WCAG (Web Content Accessibility Guidelines) is and its conformance levels (A, AA, AAA)
- The importance of web accessibility for users with disabilities
- How to make a website navigable using only a keyboard
- How to use the `visually-hidden` pattern to expose content to screen readers without showing it visually
- How to add `aria-label` attributes to interactive elements
- How to use semantic HTML elements to improve accessibility
- How to write accessible SVG icons using `<title>` elements

---

## Requirements

- All HTML files must be valid W3C-compliant HTML5
- CSS must not break existing visual layout
- All interactive elements must be keyboard-accessible
- All images must have meaningful `alt` attributes (or empty `alt=""` for decorative images)
- All form inputs must have associated labels or `aria-label` attributes

---

## Project Structure

```
accessibility/
├── images/                   Shared image assets (responsive versions included)
│   ├── icons/                SVG social media icons
│   └── responsive/           Responsive image variants
└── keyboard/
    ├── 01-index.html         Task 1 – Keyboard navigation improvements
    └── 01-styles.css         Stylesheet with visually-hidden and focus styles
```

---

## Tasks

### Task 0 – Make the "works" card focus visible

**File:** `keyboard/01-index.html`, `keyboard/01-styles.css`

The `.card-work` component hides its title link by default (opacity: 0). Without a focus style, keyboard users cannot tell when this element is focused.

Changes applied:
- Added a `:focus` state on `.card-work .card-title a` so that keyboard focus triggers the same visible overlay as hover
- The `visually-hidden` CSS utility class ensures the `<h1>Homepage</h1>` heading is read by screen readers but not displayed visually
- The search `<input>` uses `aria-label="Search through site content"` since it has no visible `<label>` element
- SVG icons include a `<title>` element so screen readers can announce their purpose

**Key CSS pattern used:**

```css
/* Hides content visually but keeps it accessible to screen readers */
.visually-hidden:not(:focus):not(:active) {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
```

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [MDN Web Docs – Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM – Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [The A11Y Project](https://www.a11yproject.com/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)

---

## Author

Holberton School – Web Front-End curriculum
