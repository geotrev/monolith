# Monolith

noun – mono·lith – \ˈmä-nə-ˌlith\

"A super-powered CSS system built for the modern web."

## Overview

• Easily configure styles in `_config.scss`. 

• Highly customizable color palettes, font options, spacing, and the like that apply across components.

• By default each component uses global fonts, spacing, and colors; replace with unique styles for branding customization.

• Define brand palette with primary, secondary, and tertiary colors, including an array for black/white combinations.

• Default status colors: `warning`, `destroy`, `success`, `notice`.

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
