import Table from './table'
import Head from './head'
import HeadCell from './head-cell'
import Body from './body'
import Row from './row'
import Cell from './cell'

Table.Head = Head
Table.HeadCell = HeadCell
Table.Body = Body
Table.Row = Row
Table.Cell = Cell

export default Table
export {
  Table,
  Head as TableHead,
  HeadCell as TableHeadCell,
  Body as TableBody,
  Row as TableRow,
  Cell as TableCell,
}
