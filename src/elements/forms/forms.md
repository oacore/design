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
import FormAddon from './addon';

<FormGroup>
  <FormAddon place="prepend">$</FormAddon>
  <FormAddon place="append">.00</FormAddon>
  <FormControl type="number" id="example-input-2" placeholder="e.g. 10" />
  <FormLabel htmlFor="example-input-2">Amount</FormLabel>
</FormGroup>
```

Input with a progress indicator:

```jsx
import FormLabel from './label';
import FormControl from './control';
import FormGroup from './group';
import FormAddon from './addon';
import ProgressSpinner from '../progress-spinner';

<FormGroup>
  <FormAddon>
    <ProgressSpinner />
  </FormAddon>
  <FormControl type="text" id="example-input-3" placeholder="e.g. 10" />
  <FormLabel htmlFor="example-input-3">Amount</FormLabel>
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
