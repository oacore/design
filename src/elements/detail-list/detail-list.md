```jsx
import { Icon, DetailList } from '../';

<DetailList>
    <DetailList.Item name="Header 1">
      <Icon
        src={`/icons.svg#document-success`}
        aria-hidden
      />
      Some sample text here
    </DetailList.Item>
    <DetailList.Item name="Header 2">
      Some sample text here
    </DetailList.Item>
</DetailList>
```