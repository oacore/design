```jsx
import { TableHead, TableRow, TableHeadCell, TableCell } from '.';

<Table>
  <TableHead>
    <TableRow>
      <TableHeadCell>1 - not sortable</TableHeadCell>
      <TableHeadCell order="any">2 - sortable</TableHeadCell>
      <TableHeadCell order="asc" onClick={() => {}}>3 - sorted asc</TableHeadCell>
      <TableHeadCell order="desc">4 - sorted desc</TableHeadCell>
    </TableRow>
  </TableHead>

  <TableRow>
    <TableCell>Value 1-1</TableCell>
    <TableCell>Value 1-2</TableCell>
    <TableCell>Value 1-3</TableCell>
    <TableCell>Value 1-4</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Value 2-1</TableCell>
    <TableCell>Value 2-2</TableCell>
    <TableCell>Value 2-3</TableCell>
    <TableCell>Value 2-4</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Value 3-1</TableCell>
    <TableCell>Value 3-2</TableCell>
    <TableCell>Value 3-3</TableCell>
    <TableCell>Value 3-4</TableCell>
  </TableRow>
</Table>
```
