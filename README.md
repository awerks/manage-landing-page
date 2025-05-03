# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- [Added: dark mode]
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](design/desktop-design.jpg)

### Links

- Live Site URL: [deployed on Netflify](https://managelandingpage-mentor.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- JavaScript
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

One interesting challenge was creating the numbered list section ("What's different about Manage?"). The design required two distinct layouts:

1.  **Mobile:** The number and heading needed to be inline, side-by-side, with a shared background highlight. The paragraph text appeared below this group.
2.  **Desktop:** The layout switched to a two-column grid within each list item. The number occupied the first column, while the heading and paragraph were stacked in the second column.

To solve this without duplicating content or complex CSS, I used a combination of HTML structure and Tailwind's responsive utilities, including the clever `display: contents;` property.

First, I grouped the number `<span>` and the `<h3>` heading within a wrapper `<div>`:

```html
<!-- Inside each <li> -->
<div class="flex items-center md:contents ...">
  {/* Wrapper Div */}
  <span class="number ...">01</span>
  <h3 class="text-base ...">Track company-wide progress</h3>
</div>
<p class="mt-2 md:col-start-2 ...">...</p>
```

On mobile, the wrapper `div` uses `flex` to position the number and heading and has a background (`bg-very-pale-red`).

The key part is `md:contents`. On medium screens and up (`md:`), this applies `display: contents;` to the wrapper `div`. This CSS property makes the element itself disappear from the visual layout tree, but its _child elements_ (the `span` and `h3`) remain as if they were direct children of the parent element (the `<li>`).

Since the `<li>` itself becomes a grid container on `md:` screens (`md:grid md:grid-cols-[auto_1fr]`), the `span` and `h3` (now promoted by `md:contents`) become direct grid items. The `span` naturally falls into the first `auto` column, and the `h3` falls into the second `1fr` column. The paragraph (`<p>`) is explicitly placed in the second column using `md:col-start-2`.

### Useful resources

- [Tailwind docs](https://tailwindcss.com/docs/styling-with-utility-classes) - for understanding how to use Tailwind CSS.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - I refer to it often.

## Author

- Frontend Mentor - [@awerks](https://www.frontendmentor.io/profile/awerks)
