## Accessible icon

Provide alternative text in `alt` prop for tech assistive users accessibility.

The component will add a `<title>` to inlined SVG element,
so screen readers will be able to read it.

```jsx
<button type="button">
  <Icon src="check.svg" alt="OK" />
</button>
```

## Meaningless icon

Add `aria-hidden` attribute for meaningless icons like in the following
example.

```jsx
<button type="button">
  <Icon src="check.svg" aria-hidden />
  OK
</button>
```
