# Java Code Style Guidelines



## Table of Contents

- [Terminology](#terminology)
- [Source file structure](#source-file-structure)
  - [Package statement](#package-statement)
  - [Import statements](#import-statements)
  - [Class declaration](#class-declaration)
- [Formatting](#formatting)
  - [Braces](#braces)
  - [Block indentation](#block-indentation)
  - [Column limit](#column-limit)
  - [Line-wrapping](#line-wrapping)



## <a name="terminology"></a> Terminology

- The term _class_ is used inclusively to mean an "ordinary" class, enum class, interface or annotation type (@interface).
- The term _member_ (of a class) is used inclusively to mean a nested class, field, method, or constructor; that is, all top-level contents of a class except initializers and comments.
- _block-like_ construct refers to the body of a class, method or constructor.



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

If there are both static and non-static imports, a single blank line separates the two blocks. There are no other blank lines between import statements.

Static import is not used for static nested classes. They are imported with normal imports.



### <a name="class-declaration"></a> Class declaration

- Each top-level class resides in a source file of its own.
- There's no single correct recipe for how to do it. Different classes may order their contents in different ways.
- What is important is that each class uses some **logical order**, which its maintainer could explain if asked. For example, new methods are not just habitually added to the end of the class, as that would yield "chronological by date added" ordering, which is not a logical ordering.
- Methods of a class that share the same name appear in a single contiguous group with no other members in between. The same applies to multiple constructors (which always have the same name).



## <a name="formatting"></a> Formatting



### <a name="braces"></a> Braces

Braces are used with if, else, for, do and while statements, even when the body is empty or contains only a single statement.
Other optional braces, such as those in a lambda expression, remain optional.

Braces follow the [Kernighan and Ritchie style](https://en.wikipedia.org/wiki/Indentation_style#K&R) for nonempty blocks and block-like constructs:
- No line break before the opening brace, except as detailed below.
- Line break after the opening brace.
- Line break before the closing brace.
- Line break after the closing brace, only if that brace terminates a statement or terminates the body of a method, constructor, or named class.

Empty blocks may be concise. It may be closed immediately after it is opened, with no characters or line break in between (`{}`), unless it is part of a multi-block statement (one that directly contains multiple blocks: `if/else` or `try/catch/finally`).



### <a name="block-indentation"></a> Block indentation



### <a name="column-limit"></a> Column limit
### <a name="line-wrapping"></a> Line-wrapping





