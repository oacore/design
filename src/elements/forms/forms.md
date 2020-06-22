### Type

#### Text

Label before the input:

```jsx
import FormLabel from './label';
import FormControl from './control';

<p>
  <FormLabel>Label</FormLabel>
  <FormControl defaultValue="Hello" />
</p>
```

Label after the input:

```jsx
import FormLabel from './label';
import FormControl from './control';

<p style={{ position: 'relative' }}>
  <FormControl placeholder="Placeholder" />
  <FormLabel>Label</FormLabel>
</p>
```

#### Select

```jsx
import FormLabel from './label';
import FormControl from './control';

<p style={{ position: 'relative' }}>
  <FormControl type="select" defaultValue="Lorem">
    <option>Lorem</option>
    <option>Ipsum</option>
  </FormControl>
  <FormLabel>Label</FormLabel>
</p>
```

#### Textarea

```js
import FormLabel from './label';
import FormControl from './control';

<p style={{ position: 'relative' }}>
  <FormControl type="textarea" placeholder="Hello world!" />
  <FormLabel>Label</FormLabel>
</p>
```
