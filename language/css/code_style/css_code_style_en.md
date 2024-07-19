# CSS Style Guidelines
This file lists some best practices and principles that should be followed when writing CSS.

## Code Formatting 
### Property Declaration 
Each property must be decleared on a new line. This makes the code readable and consistent.

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

Use empty lines to seperate different CSS rulesets. This keeps the code consistent and easy to read.

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
  transform: rotate(360deg),scale(1.00);
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
### Use of kebab-case
In CSS, every CSS property follows [kebab-case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case) (sometimes referred to as hyphenated). Therefore it is common practice to name variables (also applicable to class names and id names) using kebab-case as it maintains consistency. Avoid use of multiple variable naming convention.

When declaring CSS variables, the variable name should always start with `--` if it is a global variable which are commonly declared in `:root`.

But in case of a local variable (variable declared in another element) its name should start with `--_`. The underscore in the name indicates that the variable is a local variable.

Do this 
```css
:root {
  --accent-color: lime;
  --primary-color: blue;
}

.my-class, 
.red, 
.size-big {
  --_size-big: 20px;
  font-size: var(--_size-big);
  background-color: red;
}
```

Instead of  
```css
:root {
  --accentColor: lime;
  --primary_color: blue;
}

.myClass,
.RED,
.size_big {
  --sizeBig: 20px;
  font-size: var(--sizeBig);
  background-color: red;
}
```

















