### Type variations

Example with a search input:

```jsx
<TextField
  id="search"
  type="search"
  name="search"
  label="Search"
  placeholder="Type to search..."
/>
```

Example with a password:

```jsx
<TextField
  id="login-password"
  type="password"
  name="password"
  minlength="8"
  label="Password"
  placeholder="🔒 Something secure"
  helper="Should be at least 8 characters length."
/>
```

Example `focus` variant (label on top):

```jsx
<TextField
  id="focus-name"
  name="name"
  label="Name"
  placeholder="e.g. John Doe"
  variant="focus"
/>
```

Example with error message:

```jsx
<TextField
  id="error-name"
  name="user-name"
  label="User name"
  placeholder="e.g. john"
  helper="User name is required"
  variant="error"
/>
```

Example with success message:

```jsx
<TextField
  id="success-name"
  name="user-name"
  label="User name"
  value="john"
  helper="Nice to meet you john!"
  variant="success"
/>
```

Example with disabled input:

```jsx
<TextField
  id="disabled-input"
  name="disabled-input"
  label="Disabled input"
  value="Disabled input"
  variant="success"
  disabled
/>
```

### Size variations

#### Small

```jsx
<TextField
  label="Name"
  placeholder="e.g. John Doe"
  size="small"
/>
```

#### Large

```jsx
<TextField
  label="Name"
  placeholder="e.g. John Doe"
  size="large"
/>
```
