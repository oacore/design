### Type

#### Text

Label before the input:

```jsx
import FormLabel from './label';
import FormControl from './control';
import FormGroup from './group';

<FormGroup>
  <FormLabel>Label</FormLabel>
  <FormControl defaultValue="Hello" />
</FormGroup>
```

Label after the input:

```jsx
import FormLabel from './label';
import FormControl from './control';
import FormGroup from './group';

<FormGroup>
  <FormControl placeholder="Placeholder" />
  <FormLabel>Label</FormLabel>
</FormGroup>
```

#### Select

```jsx
import FormLabel from './label';
import FormControl from './control';
import FormGroup from './group';

<FormGroup>
  <FormControl type="select" defaultValue="Lorem">
    <option>Lorem</option>
    <option>Ipsum</option>
  </FormControl>
  <FormLabel>Label</FormLabel>
</FormGroup>
```

#### Textarea

```js
import FormLabel from './label';
import FormControl from './control';
import FormGroup from './group';

<FormGroup>
  <FormControl type="textarea" placeholder="Hello world!" />
  <FormLabel>Label</FormLabel>
</FormGroup>
```
