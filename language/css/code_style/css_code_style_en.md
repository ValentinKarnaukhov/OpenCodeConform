# CSS Style Guidelines
This is a guideline which lists best practices and principles that should be followed when writing CSS.

## Code Formatting 
### Property Declaration 
Each property must be declared on a new line. This makes the code readable and consistent.

Every property declaration must end with a semicolon even if it is the last declaration in a CSS ruleset.

Do this
```css
.my-class {
  color: blue;
  height: 100px;
  width: 20px;
}
```

Instead of this
```css
.my-class {
  color: blue; height: 100px; width: 20px
}
```
Notice how both the code blocks shown above are valid and have the same effect but one of them is more readable than the other.

### Indentation 
Add two spaces for each level of indentation. This ensures consistency and readability.

Do this
```css
@media (max-width: 600px) {
  .cool-class {
    color: blue;
  }
}
```

Instead of this
```css
@media (max-width: 600px) {
.cool-class {
color: blue;
}
}
```

### Spacing and Empty Lines 
Adding appropriate spacing can make code easy to read. It is recommended to add a space after each colon `:` in property declaration and after every comma `,` in property value.

Use empty lines to separate different CSS rulesets and separate properties whenever necessary. This keeps the code consistent and easy to read.

Do this
```css
.cool-class {
  color: blue;
}

.cooler-class {
  filter: brightness(3.0), sepia(0.25), saturate(0.75);
}

.coolest-class {
  transform: rotate(360deg), scale(1.00);
}
```

Instead of this
```css
.cool-class {
  color:blue;
}
.cooler-class {
  filter:brightness(3.0),sepia(0.25),saturate(0.75);
}
.coolest-class {
  transform:rotate(360deg),scale(1.00);
}
```

### Placement of Curly Braces
The starting curly brace must be in the same line as the CSS selector with a space between them. The closing curly brace must be on a new line.

Do this
```css
.wrapper {
  width: min(90vw, 450px);
  height: 100px;
  color: white;
}

.blue {
  color: blue;
}
```

Instead of this
```css
.wrapper
{
  width: min(90vw, 450px);
  height: 100px;
  color: white;
}

.blue { color: blue; }
```

### Line Length & Line Breaks
A line should not have more than 80 characters and it shouldn't be difficult to read or interpret. If something like this happens then it is better to break it into multiple lines. 

This rule may not be applicable in certain scenarios like when using a URL or SVG. It is also better to break complex or grouped CSS selectors into multiple lines to improve readability.

Do this
```css
.red,
.accent,
.error,
.warning {
  color: red;
}

.cool-bg {
  background: linear-gradient(
    to right,
    #41C,
    #401,
    #701,
    #707
  );
}
```

Instead of this
```css
.red, .accent, .error, .warning {
  color: red;
}

.cool-bg {
  background: linear-gradient( to right, #41C, #401, #701, #707);
}
```

## Naming Conventions
In CSS, every CSS property follows [kebab-case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case) (sometimes referred to as hyphenated). Therefore it is common practice to name variables (also applicable to class names and id names) using kebab-case as it maintains consistency. Avoid use of multiple variable naming convention.

When declaring CSS variables, the variable name should always start with `--` if it is a global variable which are commonly declared in `:root`.

But in case of a local variable (variable declared in another element) its name should start with `--_`. The underscore in the name indicates that the variable is a local variable.

Make sure the variable names are concise and indicate their purpose and use case.

Do this 
```css
:root {
  --accent-color: lime;
  --primary-color: blue;
}

#my-div, 
.red, 
.size-big {
  --_size-big: 20px;
  font-size: var(--_size-big);
  background-color: red;
}

.lightblue {
  color: lightblue;
}
```

Instead of  
```css
:root {
  --accentColor: lime;
  --primary_color: blue;
}

#myDiv,
.RED,
.size_big {
  --sizeBig: 20px;
  font-size: var(--sizeBig);
  background-color: red;
}

.blue {
  color: lightblue;
}
```

## Code Structure
### Organization of Files and Directories 
Organizing CSS files can be very difficult, therefore it is best to create separate CSS files based on layouts and use case. It is also best practice to have a different CSS file for every HTML file.

Example:

```css
css/
  global.css
  docs.css
  components/
    forms.css
    cards.css
    buttons.css
  layout/
    grid.css
    header.css
    footer.css
  theme/
    light-theme.css
    dark-theme.css
```

### Order of Properties 
Grouping related properties by using empty lines can make code easier to understand.

Example:
```css
.box::before {
  content: '';

  position: absolute;
  top: 0;
  left: 0;

  display: block;
  aspect-ratio: 16 / 9;
  width: 200px;
  margin: 2rem auto;
  padding: 0;

  border: 2px solid black;
  box-shadow: 0 0 20px 5px #000;
  background: linear-gradient(
    to right,
    red,
    blue
  );

  transition: transform ease 1s;
  animation: rotate infinite ease 10s;
}
```

## Comments
### When to Comment?
1. When a part of a code is difficult to understand, complicated or needs context.

Example
```css
/* screen width <= 800px */
/* Phones, Large Phones and Tablets */
@media (max-width: 800px) {
  ...
}
```

2. To separate sections in a CSS file.
   
Example:
```css
/* Variables */
:root {
  ...
}

/* Base changes */
body {
  ...
}

/* Navbar */
nav {
  ...
}

/* Footer */
footer {
  ...
}
```

### How to Comment
1. Only use comments when necessary.
2. Be concise and avoid long comments.
3. Update comments from time to time.
4. Make sure that they have a purpose and reflect their intended meaning.
5. Use single line comments for short descriptive purposes.
6. Use multiline comments for writing long comments.

Example:
```css
/* This is a single line comment */

/* This is a multiline comment
 * This comment spans multiple lines
 */
```

## Typical Errors & How to avoid them 
### Using inline styles
Using inline styles makes your code messier. It is always better to keep your CSS centralised and not spread out. Not using inline styles keeps the HTML clean.

Avoid this
```html
<div style="color: red; font-size: 20px;">Hello World</div>
```

Do this
```html
<div class="red">Hello World</div>
```
```css
.red {
  color: red;
}
```

### Using overly specific selectors
Use simple and more maintainable selectors. Avoid unnecessary specificity.

Avoid this
```css
nav > ul.menu > li > a {
  text-decoration: none;
}
```

Do this instead 
```css
nav a {
  text-decoration: none;
}
```

### Using IDs for styling
Using classes for styling is much more convenient as multiple elements can have the same class. It allows for flexibility and reusability.

Avoid this
```css
#blue {
  color: blue;
}
```

Do this
```css
.blue {
  color: blue;
}
```

### Using `!important`
Overusing `!important` can make the code hard to maintain and override. Only use it when absolutely necessary.

Avoid this 
```css
.red {
  color: red !important;
}
```

Do this 
```css
.red {
  color: red !important;
}
```

### Overusing Universal Selector
Overusing universal selector can cause massive performance issues. It is best to apply some styles to specific elements.

Avoid this
```css
* {
  font-family: Arial, sans-serif;
  color: white;
  font-size: 16px;
  border: none;
  outline: none;
}
```

Do this
```css
* {
  padding: 0;
  margin: 0;
}

body {
  font-family: Arial, sans-serif;
}
```

## Best Practices 
### Using browser prefixes
Using browser prefixes allow for cross-browser compatibility, especially for old browsers. Browser prefixes are also called [vendor prefixes](http://web.simmons.edu/~grovesd/comm244/notes/week6/css3-compatibility).

Example:
```css
.cool-box {
  -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
       -o-transform: rotate(45deg);
          transform: rotate(45deg);
}
```

### Resetting CSS
Resetting CSS is important because different browser have different default styles. Using a proper CSS reset ensures consistency across browsers. Try to avoid unnecessary resets.

Example:
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### Using short hand properties
Using short hand properties reduces the amount of code and makes the code more readable.

Example:
```css
.my-wrapper {
  margin: 15px 20px;
  padding: 10px 200px 20px 5px;
}
```
