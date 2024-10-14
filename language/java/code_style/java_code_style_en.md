# Java Style Guidelines

_Author_: [Valentin Karnaukhov](https://github.com/ValentinKarnaukhov)

## <a name="terminology"></a> Terminology

- The term _class_ is used inclusively to mean an "ordinary" class, enum class, interface or annotation type (
  @interface).
- The term _member_ (of a class) is used inclusively to mean a nested class, field, method, or constructor; that is, all
  top-level contents of a class except initializers and comments.
- _block-like_ construct refers to the body of a class, method or constructor.
- When code that might otherwise legally occupy a single line is divided into multiple lines, this activity is called _
  line-wrapping_.

## <a name="source-file-structure"></a> Source file structure

A source file consists of, **in order**:

1. License or copyright information, if present
2. Package statement
3. Import statements
4. Exactly one top-level class

Exactly one blank line separates each section that is present.

### <a name="package-statement"></a> Package statement

- The package statement is not line-wrapped. The column limit does not apply to package statements.

### <a name="import-statements"></a> Import statements

- Wildcard imports, static or otherwise, are not used.
- Import statements are not line-wrapped. The column limit does not apply to import statements.

Imports are ordered as follows:

1. All static imports in a single block.
2. All non-static imports in a single block.

If there are both static and non-static imports, a single blank line separates the two blocks. There are no other blank
lines between import statements.

Static import is not used for static nested classes. They are imported with normal imports.

### <a name="class-declaration"></a> Class declaration

- Each top-level class resides in a source file of its own.
- There's no single correct recipe for how to do it. Different classes may order their contents in different ways.
- What is important is that each class uses some **logical order**, which its maintainer could explain if asked. For
  example, new methods are not just habitually added to the end of the class, as that would yield "chronological by date
  added" ordering, which is not a logical ordering.
- Methods of a class that share the same name appear in a single contiguous group with no other members in between. The
  same applies to multiple constructors (which always have the same name).

## <a name="formatting"></a> Formatting

### <a name="braces"></a> Braces

Braces are used with if, else, for, do and while statements, even when the body is empty or contains only a single
statement.
Other optional braces, such as those in a lambda expression, remain optional.

Braces follow the [Kernighan and Ritchie style](https://en.wikipedia.org/wiki/Indentation_style#K&R) for nonempty blocks
and block-like constructs:

- No line break before the opening brace, except as detailed below.
- Line break after the opening brace.
- Line break before the closing brace.
- Line break after the closing brace, only if that brace terminates a statement or terminates the body of a method,
  constructor, or named class.

Empty blocks may be concise. It may be closed immediately after it is opened, with no characters or line break in
between (`{}`), unless it is part of a multi-block statement (one that directly contains multiple blocks: `if/else`
or `try/catch/finally`).

### <a name="block-indentation"></a> Block indentation

Each time a new block or block-like construct is opened, the indent increases by two spaces. When the block ends, the
indent returns to the previous indent level. The indent level applies to both code and comments throughout the block.

### <a name="column-limit"></a> Column limit

Java code has a column limit of 120 characters. A "character" means any Unicode code point. Except as noted below, any
line that would exceed this limit must be line-wrapped.

Exceptions:

- Lines where obeying the column limit is not possible (for example, a long URL in Javadoc, or a long JSNI method
  reference).
- package and import statements
- Command lines in a comment that may be copied-and-pasted into a shell.
- Very long identifiers, on the rare occasions they are called for, are allowed to exceed the column limit.

### <a name="line-wrapping"></a> Line-wrapping

There is no comprehensive, deterministic formula showing exactly how to line-wrap in every situation. Very often there
are several valid ways to line-wrap the same piece of code.

:::info
While the typical reason for line-wrapping is to avoid overflowing the column limit, even code that would in fact fit
within the column limit may be line-wrapped at the author's discretion.
:::

:::tip
Extracting a method or local variable may solve the problem without the need to line-wrap.
:::

### <a name="breaks"></a> Breaks

Each statement is followed by a line break.

The prime directive of line-wrapping is: prefer to break at a higher syntactic level. Also:

- When a line is broken at a non-assignment operator the break comes before the symbol.
    - This also applies to the following "operator-like" symbols:
        - the dot separator `(.)`
        - the two colons of a method reference `(::)`
        - an ampersand in a type bound `(<T extends Foo & Bar>)`
        - a pipe in a catch block `(catch (FooException | BarException e))`
- When a line is broken at an assignment operator the break typically comes after the symbol, but either way is
  acceptable.
    - This also applies to the "assignment-operator-like" colon in an enhanced for ("foreach") statement.
- A method or constructor name stays attached to the open parenthesis `(()` that follows it.
- A comma `(,)` stays attached to the token that precedes it.
- A line is never broken adjacent to the arrow in a lambda, except that a break may come immediately after the arrow if
  the body of the lambda consists of a single unbraced expression.

:::info
The primary goal for line wrapping is to have clear code, not necessarily code that fits in the smallest number of
lines.
:::

### <a name="whitespace"></a> Whitespace

#### <a name="vertical"></a> Vertical

A single blank line always appears:

- Between consecutive members or initializers of a class: fields, constructors, methods, nested classes, static
  initializers, and instance initializers.
    - **Exception**: A blank line between two consecutive fields (having no other code between them) is optional. Such
      blank lines are used as needed to create logical groupings of fields.
    - **Exception**: Blank lines between enum constants
- As required by other sections of this document (such as [source file structure](#source-file-structure)
  and [import statements](#import-statements)).

A single blank line may also appear anywhere it improves readability, for example between statements to organize the
code into logical subsections. A blank line before the first member or initializer, or after the last member or
initializer of the class, is neither encouraged nor discouraged.

Multiple consecutive blank lines are permitted, but never required (or encouraged).

#### <a name="horizontal"></a> Horizontal

Beyond where required by the language or other style rules, and apart from literals, comments and Javadoc, a single
ASCII space also appears in the following places only.

- Separating any reserved word, such as if, for or catch, from an open parenthesis `(()` that follows it on that line
- Separating any reserved word, such as else or catch, from a closing curly brace `(})` that precedes it on that line
- Before any open curly brace `({)`, with two exceptions:
    - `@SomeAnnotation({a, b})` (no space is used)
    - `String[][] x = {{"foo"}};` (no space is required between `{{`, by item 9 below)
- On both sides of any binary or ternary operator. This also applies to the following "operator-like" symbols:
    - the ampersand in a conjunctive type bound: `<T extends Foo & Bar>`
    - the pipe for a catch block that handles multiple exceptions: `catch (FooException | BarException e)`
    - the colon `(:)` in an enhanced `for` ("foreach") statement
    - the arrow in a lambda expression: `(String str) -> str.length()`

  but not
    - the two colons `(::)` of a method reference, which is written like `Object::toString`
    - the dot separator `(.)`, which is written like `object.toString()`
- After `,:;` or the closing parenthesis (`)`) of a cast
- Between any content and a double slash (`//`) which begins a comment. Multiple spaces are allowed.
- Between a double slash (`//`) which begins a comment and the comment's text. Multiple spaces are allowed.
- Between the type and variable of a declaration: `List<String> list`
- Optional just inside both braces of an array initializer
    - `new int[] {5, 6}` and `new int[] { 5, 6 }` are both valid
- Between a type annotation and `[]` or `....`

This rule is never interpreted as requiring or forbidding additional space at the start or end of a line; it addresses
only interior space.

### <a name="grouping-parentheses"></a> Grouping parentheses: recommended

Optional grouping parentheses are omitted only when author and reviewer agree that there is no reasonable chance the
code will be misinterpreted without them, nor would they have made the code easier to read. It is not reasonable to
assume that every reader has the entire Java operator precedence table memorized.

### <a name="variable-declarations"></a> Variable declarations

Every variable declaration (field or local) declares only one variable: declarations such as `int a, b;` are not used.

:::note
Exception: Multiple variable declarations are acceptable in the header of a for loop.
:::

Local variables are not habitually declared at the start of their containing block or block-like construct. Instead,
local variables are declared close to the point they are first used (within reason), to minimize their scope. Local
variable declarations typically have initializers, or are initialized immediately after declaration.

## <a name="annotations"></a> Annotations

### Type-use annotations

Type-use annotations appear above annotated type.

```java
@Nullable final String name;

@NotNull(message = "Should be not null")
public Person getPersonByName(String name);
```

### Class annotations

Annotations applying to a class appear immediately after the documentation block, and each annotation is listed on a
line of its own (that is, one annotation per line).

```java

@Deprecated
@CheckReturnValue
public final class Frozzler { ...
}
```

### Method and constructor annotations

The rules for annotations on method and constructor declarations are the same as the previous section.

```java
@Deprecated
@Override
public String getNameIfPresent(){...}
```

### Field annotations

Field annotations appear above annotated type.

```java
@Partial @Mock
DataLoader loader;
```

## <a name="modifiers"></a> Modifiers

Class and member modifiers, when present, appear in the order recommended by the Java Language Specification:

```java
public protected private abstract default static final transient volatile synchronized native strictfp
```

### <a name="numeric-literals"></a> Numeric Literals

`long`-valued integer literals use an uppercase `L` suffix, never lowercase (to avoid confusion with the digit `1`). For
example, `3000000000L` rather than `3000000000l`.

## <a name="Naming"></a> Naming

### <a name="common-naming"></a> Rules common to all identifiers

Identifiers use only ASCII letters and digits, and, in a small number of cases noted below, underscores. Thus each valid
identifier name is matched by the regular expression `\w+`.

Special prefixes or suffixes are not used. For example: name_, mName, s_name and kName.

### <a name="common-naming"></a> Package names

Package names use only lowercase letters and digits (no underscores). Consecutive words are simply concatenated
together. For example, `com.example.deepspace`, not `com.example.deepSpace` or `com.example.deep_space`.

### <a name="class-names"></a> Class names

Class names are written in [UpperCamelCase](#camel-case-defined).

Class names are typically nouns or noun phrases. For example, `Character` or `ImmutableList`. Interface names may also
be nouns or noun phrases (for example, `List`), but may sometimes be adjectives or adjective phrases instead (for
example, `Readable`).

There are no specific rules or even well-established conventions for naming annotation types.

A _test_ class has a name that ends with `Test`, for example, `HashIntegrationTest`. If it covers a single class, its
name is
the name of that class plus Test, for example `HashImplTest`.

### <a name="method-names"></a> Method names

Method names are written in [lowerCamelCase](#camel-case-defined).

Method names are typically verbs or verb phrases. For example, `sendMessage` or `stop`.

Underscores may appear in JUnit test method names to separate logical components of the name, with each component
written in [lowerCamelCase](#camel-case-defined), for example `transferMoney_deductsFromSource`. There is no One Correct
Way to name test
methods.

### <a name="constant-names"></a> Constant names

Constant names use `UPPER_SNAKE_CASE`: all uppercase letters, with each word separated from the next by a single
underscore. But what is a constant, exactly?

Constants are static final fields whose contents are deeply immutable and whose methods have no detectable side effects.
Examples include primitives, strings, immutable value classes, and anything set to `null`. If any of the instance's
observable state can change, it is not a constant. Merely intending to never mutate the object is not enough.

```java
static final int NUMBER=5;
static final ImmutableList<String> NAMES=ImmutableList.of("Ed","Ann");
static final Map<String, Integer> AGES=ImmutableMap.of("Ed",35,"Ann",32);
static final Joiner COMMA_JOINER=Joiner.on(','); // because Joiner is immutable
static final SomeMutableType[]EMPTY_ARRAY={};
```

### <a name="non-constant-fiels-names"></a> Non-constant field names

Non-constant field names (static or otherwise) are written in [lowerCamelCase](#camel-case-defined).

These names are typically nouns or noun phrases. For example, `computedValues` or `index`.

### <a name="parameter-naming"></a> Parameter names

Parameter names are written in [lowerCamelCase](#camel-case-defined).

One-character parameter names in public methods should be avoided.

### <a name="local-variable-names"></a> Local variable names

Local variable names are written in [lowerCamelCase](#camel-case-defined).

Even when final and immutable, local variables are not considered to be constants, and should not be styled as
constants.

### <a name="camel-case-defined"></a> Camel case: defined

Sometimes there is more than one reasonable way to convert an English phrase into camel case, such as when acronyms or
unusual constructs like "IPv6" or "iOS" are present. To improve predictability, use following (
nearly) deterministic scheme.

Beginning with the prose form of the name:

1) Convert the phrase to plain ASCII and remove any apostrophes. For example, "Müller's algorithm" might become "
   Muellers
   algorithm".
2) Divide this result into words, splitting on spaces and any remaining punctuation (typically hyphens).
    - Recommended: if any word already has a conventional camel-case appearance in common usage, split this into its
      constituent parts (e.g., "AdWords" becomes "ad words"). Note that a word such as "iOS" is not really in camel case
      per
      se; it defies any convention, so this recommendation does not apply.
3) Now lowercase everything (including acronyms), then uppercase only the first character of:
    - ... each word, to yield upper camel case, or
    - ... each word except the first, to yield lower camel case
4) Finally, join all the words into a single identifier.

Note that the casing of the original words is almost entirely disregarded. Examples:

| Prose form              | Correct           | Incorrect         |
|-------------------------|-------------------|-------------------|
| "XML HTTP request"      | XmlHttpRequest    | XMLHTTPRequest    |
| "new customer ID"       | newCustomerId     | newCustomerID     |
| "inner stopwatch"       | innerStopwatch    | innerStopWatch    |
| "supports IPv6 on iOS?" | supportsIpv6OnIos | supportsIPv6OnIOS |
| "Turn on 2SV"           | turnOn2sv         | turnOn2Sv         |


