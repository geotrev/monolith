# Monolith

noun – mono·lith – \ˈmä-nə-ˌlith\

"A CSS framework that acts as a single, organized system."

## Getting Started

### SCSS

Because Monolith is an SCSS framework designed to be modified, your best bet is to add the SCSS to your pipeline and adjust settings through `_config.scss`. This way you have full control over which components get included in `monolith.scss` (which you can include in your website's `<head>`).

[Download Version 1.0](https://github.com/gtreviranus/monolith/tree/master/src/SCSS/monolith-scss.zip)

### Package

If you prefer to use a package, currently NPM is the only option (more to come soon!).

Install it:

```shell
$ npm install --save monolith-css
```

Link the compiled CSS to your project `<head>`:

```html
<link href="path/to/monolith.css" rel="stylesheet"/>
<!-- Add new styles after Monolith -->
```

**Recommended:** Copy `_config.scss` into your project's SCSS pipeline and overwrite Monolith's defaults. This way you avoid that "out of the box" look.

Duplicate `_config.scss` if you want to preserve Monolith's defaults, then import it for SCSS compiler:
```css
@import 'path/to/config';
```

### CSS

[Grab the CSS!](https://github.com/gtreviranus/monolith/blob/master/src/CSS/monolith.css) (**recommended:** add before any custom styles for new projects)

## Overview

• Easily configure styles in `_config.scss`.

• Highly customizable color palettes, font options, spacing, and the like that apply across components.

• By default each component uses global fonts, spacing, and colors; replace with unique styles for branding customization.

• Define brand palette with primary, secondary, and tertiary colors, including an array for black/white combinations.

## Grid

• Specify names for grid (container), row and column elements

• Columns with no defined width classes (i.e., `xsmall-4`) will space evenly in their container, regardless of content.

• Define gutters and spacing for `column` base class.

• Fluid & fixed-width containers at multiple sizes (no class for default width): `narrow`, `large`

• Use section classes for focused content (adds vertical padding to grid container): `small-section`, `medium-section`, `large-section`

• Offset columns by breakpoint.

• Order columns by breakpoint.

• Collapse column padding inside a row by using `collapsed row`.

• Five default breakpoint classes: `xsmall`, `small`, `medium`, `large`, `xlarge`

• Use breakpoint names for mixins. E.g., `@include breakpoint-up(large) { ... }` or `<div class="xsmall-12 large-6 columns"></div>`

## Typography

• Define default header and paragraph base styles, including breakpoint size behavior and colors.

• Change the way html text helpers work by defining styles in `mark`, `small`, and `em`.

## Buttons

• Versatile buttons in multiple sizes: `small`, default (no size modifier), `medium`, `large`, `huge`

• All status colors reflected in buttons with modifier classes: `warning`, `destroy`, `success`, `notice`

• Make your buttons wide with a `wide` class.

• Button default styles defined for `primary`, `secondary`, `tertiary`, `inverted`, and `inverted-outline` buttons.

• Style simple `<a>` elements. Uses primary color by default.

## Forms

• Customize `input`, `fieldset`, `legend`, `label`, `radio`, `checkbox` and other common elements of forms.

• Define `hover`, `active`, `focus`, and `disabled` styles for fields. Disabled state will work on buttons as well.
