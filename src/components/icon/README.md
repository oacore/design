## Accessible icon

Provide alternative text in `alt` prop for tech assistive users accessibility.

The componnet will add a `<title>` to inlined SVG element,
so screen readers will be able to read it.

```jsx
<button type="button">
  <Icon src="/icons/cite.svg" alt="Cite" />
</button>
```

## Meaningless icon

Add `aria-hidden` attribute for meaningless icons like in the following
example.

```jsx
<button type="button">
  <Icon src="/icons/cite.svg" alt="Cite" aria-hidden />
  Cite
</button>
```
