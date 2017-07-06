## TODO
- [ ] Make a github page
- [ ] Think of a better project name

# Tron CSS Grid Framework
A CSS grid with none of the cruft of larger frameworks like Foundation, Bootstrap, etc.

Copy and paste the SCSS or pull the raw CSS.

See the [codepen example](https://codepen.io/geotrev/pen/PWEYaB) to see it in action.

## Getting Started

Grab the raw CSS to use all defaults, including all features. Or grab the SCSS to start customizing.

### Class names

Define the names of your `container`, `row`, and `column` elements. For example, if you wanted your container class to be named "wrapper", you can do that here.

For existing projects, using a prefix such as `aff-` might be appropriate here.

```shell
$class-names: (
  container: 'container', 
  rows: 'row', 
  columns: 'column'
);
```

### Breakpoint names & values

Remove, add or rename your breakpoint names and values here. There are five breaks by default. NOTE: The name of your breakpoint will also be the name of the class associated with it.

```shell
$breakpoints: (
  xsmall: 0,
  small: 576px,
  medium: 768px,
  large: 992px,
  xlarge: 1200px
) !default;
```

### Include or exclude certain attributes of the grid

By default, the grid container has a max width, columns have spacing, and pushes + pulls are disabled. You can change those values from `true` to `false`, or vice versa, here.

```shell
$container-max-width: true;
$column-gutter: true;
$column-gutter-bottom: true;
$pushes-enabled: false;
$pulls-enabled: false;
```

### Column count & default spacing

Change your grid count, adjust how much space is between columns, or the max width of your grid container. 

```shell
$columns: 12;
$default-space: 16px;
$container-width: 1400px;
```

## Usage

NOTE: this doc assumes you chose all defaults listed above.

### HTML

The grid is designed to be dead-simple to use, allowing you to drop it in at any time in the project life-cycle. If the class names look familiar to you, they match ZURB Foundation's classes (because they're my fav).

Make a full-width column with just `.column`.

```shell
<div class="container">
  <div class="row">
    <div class="column"></div>
  </div>
</div>
```

Add more than one to have equal width columns.

```shell
<div class="container">
  <div class="row">
    <div class="column"></div>
    <div class="column"></div>
    <div class="column"></div>
  </div>
</div>
```

Larger layouts are also doable:

```shell
<div class="container">
  <div class="row">
    <div class="small-12 medium-6 large-3 columns"></div>
    <div class="small-12 medium-6 large-3 columns"></div>
    <div class="small-12 medium-6 large-3 columns"></div>
    <div class="small-12 medium-6 large-3 columns"></div>
  </div>
  <div class="row">
    <div class="xsmall-12 small-10 large-8 columns"></div>
    <div class="xsmall-12 small-2 large-4 columns"></div>
  </div>
</div>
```

As for names... if you decided you wanted the names on your core classes to be `wrapper`, `horizontal`, and `vertical` classes, you just need to pick and replace.

```shell
<div class="wrapper">
  <div class="horizontal">
    <div class="small-12 medium-6 large-3 vertical"></div>
    <div class="small-12 medium-6 large-3 vertical"></div>
    <div class="small-12 medium-6 large-3 vertical"></div>
    <div class="small-12 medium-6 large-3 vertical"></div>
  </div>
  <div class="horizontal">
    <div class="xsmall-12 small-10 large-8 vertical"></div>
    <div class="xsmall-12 small-2 large-4 vertical"></div>
  </div>
</div>
```

### SCSS Utilities

The grid is generated with a `breakpoint-up` mixin. Use this mixin in your SCSS for greater control. NOTE: if you change the names of your breakpoints, this will be affected. NOTE 2: Consider renaming this mixin if it classes with another framework you use. 

```shell
.box { color: red; }

// .box will have blue text on medium widths and up.
@include breakpoint-up(medium) {
  .box { color: blue; }
}
```

Although the grid is mobile-first in this way, you can also use `breakpoint-down`.

```shell
.box { color: red; }

// .box will have blue text on medium widths and down.
@include breakpoint-down(medium) {
  .box { color: blue; }
}
```

You can also use `breakpoint-only` to target between two breakpoints.

```shell
.box { color: red; }

// .box will be blue only between your medium and large breakpoints, and red everywhere else.
@include breakpoint-only(medium, large) {
  .box { color: blue; } 
}
```
