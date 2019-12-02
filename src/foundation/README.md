## Headings

### Application headings

This set of headings are useful when you need it for applications,
where content is dense and you basically need small headings.

```jsx
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

### Display headings

For pages where headings should take attention, e.g. landing pages, you can
easily turn headings to display mode using `display` class.

```jsx
<h1 class="display">Display Heading 1</h1>
<h2 class="display">Display Heading 2</h2>
<h3 class="display">Display Heading 3</h3>
<h4 class="display">Display Heading 4</h4>
<h5 class="display">Display Heading 5</h5>
<h6 class="display">Display Heading 6</h6>
```

However, if you are not going to mix heading sizes, you can turn **all**
headings to display mode in more easy way just adding `display` class
to a parent element.

```jsx
<div className="display">
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
</div>
```
