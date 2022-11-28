import { useState } from 'react'
import { ITableProps, kaReducer, Table } from 'ka-table'

import { DataType, EditingMode, SortingMode, SortDirection } from 'ka-table/enums'
import { DispatchFunc } from 'ka-table/types'
import 'ka-table/style.css'
import { ICellEditorProps, IHeadCellProps } from 'ka-table/props'
import { hideNewRow, saveNewRow, showNewRow } from 'ka-table/actionCreators'
import dataArray from '../../data-access/sample'
import { kaPropsUtils } from 'ka-table/utils'
import './styles.scss'

import { MonoLabel, MonoText } from '@mono-universe/frontend/shared/design-system'

const tablePropsInit: ITableProps = {
  columns: [
    {
      dataType: DataType.String,
      key: 'name',
      width: 100,
      title: 'Features',
    },
    {
      dataType: DataType.Number,
      key: 'value_point',
      title: 'Value Points - (from customer, how important it is?)',
      style: { textAlign: 'left' },
      width: 140,
    },
    {
      dataType: DataType.Number,
      key: 'story_point',
      title: 'Story Points - (from developer, how long does it take?)',
      style: { textAlign: 'left' },
      width: 140,
    },
    {
      dataType: DataType.Number,
      key: 'bug_for_the_buck',
      title: 'Bug for the Buck - (pick the highest)',
      style: { textAlign: 'left' },
      width: 130,
    },
    {
      key: 'addColumn',
      width: 20,
    },
  ],
  data: dataArray,
  editingMode: EditingMode.Cell,
  rowKeyField: 'id',
  sortingMode: SortingMode.Single,
}

const AddButton: React.FC<IHeadCellProps> = ({ dispatch }) => {
  return (
    <div className="plus-cell-button">
      <img
        src="/assets/icons/plus.svg"
        alt="Add New Row"
        title="Add New Row"
        onClick={() => dispatch(showNewRow())}
      />
    </div>
  )
}

let maxValue = Math.max(...dataArray.map(i => i.id))
const generateNewId = () => {
  maxValue++
  return maxValue
}
const SaveButton: React.FC<ICellEditorProps> = ({ dispatch }) => {
  const saveNewData = () => {
    const rowKeyValue = generateNewId()
    dispatch(
      saveNewRow(rowKeyValue, {
        validate: true,
      }),
    )
  }
  return (
    <div className="buttons">
      <img
        src="/assets/icons/save.svg"
        className="save-cell-button"
        alt="Save"
        title="Save"
        onClick={saveNewData}
      />
      <img
        src="/assets/icons/close.svg"
        className="close-cell-button"
        alt="Cancel"
        title="Cancel"
        onClick={() => dispatch(hideNewRow())}
      />
    </div>
  )
}

const HeadCell: React.FC<IHeadCellProps> = ({ column: { title } }) => {
  const split = title ? title.split('-') : ''
  return (
    <div>
      {split[0]}
      <br />
      {split[1]}
    </div>
  )
}

export function Home() {
  const [tableProps, changeTableProps] = useState(tablePropsInit)
  const onDispatch: DispatchFunc = action => {
    changeTableProps((prevState: ITableProps) => kaReducer(prevState, action))
  }
  const data = kaPropsUtils.getData(tableProps)
  const updatedTableProps = {
    ...tableProps,
    data: data.map(obj => ({
      ...obj,
      bug_for_the_buck: (obj['value_point'] / obj['story_point'] || 0).toFixed(1),
    })),
  }
  console.log({ tableProps, updatedTableProps })
  return (
    <div>
      <MonoLabel variant="label">
        Estimate - by Fibonacci -{' '}
        <MonoText variant="paragraph1">1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144</MonoText>
      </MonoLabel>
      <Table
        {...updatedTableProps}
        childComponents={{
          sortIcon: {
            content: ({ column }) => {
              const up =
                'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cG9seWdvbiBwb2ludHM9IjI1NS45ODksMTY5LjQ3OCAxNjUuNjg1LDMyMC4wMDYgMzQ2LjMxNSwzMjAuMDA2IAkJIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MjYuNjY3LDBIODUuMzMzQzM4LjI3MiwwLDAsMzguMjkzLDAsODUuMzMzdjM0MS4zMzNDMCw0NzMuNzI4LDM4LjI3Miw1MTIsODUuMzMzLDUxMmgzNDEuMzMzDQoJCQlDNDczLjcyOCw1MTIsNTEyLDQ3My43MjgsNTEyLDQyNi42NjdWODUuMzMzQzUxMiwzOC4yOTMsNDczLjcyOCwwLDQyNi42NjcsMHogTTQwMi41NiwzNTEuODUxDQoJCQljLTMuNzk3LDYuNjc3LTEwLjg4LDEwLjgxNi0xOC41NiwxMC44MTZIMTI4Yy03LjY4LDAtMTQuNzg0LTQuMTM5LTE4LjU2LTEwLjgxNmMtMy43OTctNi42NzctMy42OTEtMTQuODkxLDAuMjU2LTIxLjQ4Mw0KCQkJbDEyOC0yMTMuMzMzYzcuNzIzLTEyLjg2NCwyOC44ODUtMTIuODY0LDM2LjU4NywwbDEyOCwyMTMuMzMzQzQwNi4yNTEsMzM2Ljk2LDQwNi4zNTcsMzQ1LjE3Myw0MDIuNTYsMzUxLjg1MXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='
              const down =
                'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDI2LjY2NywwSDg1LjMzM0MzOC4yNzIsMCwwLDM4LjI5MywwLDg1LjMzM3YzNDEuMzMzQzAsNDczLjcyOCwzOC4yNzIsNTEyLDg1LjMzMyw1MTJoMzQxLjMzMw0KCQkJQzQ3My43MjgsNTEyLDUxMiw0NzMuNzI4LDUxMiw0MjYuNjY3Vjg1LjMzM0M1MTIsMzguMjkzLDQ3My43MjgsMCw0MjYuNjY3LDB6IE00MDIuMjgzLDE4MS42NTNsLTEyOCwyMTMuMzMzDQoJCQljLTMuODYxLDYuNDIxLTEwLjc5NSwxMC4zNDctMTguMjgzLDEwLjM0N2MtNy41MDksMC0xNC40NDMtMy45MjUtMTguMzA0LTEwLjM0N2wtMTI4LTIxMy4zMzMNCgkJCWMtMy45NDctNi41OTItNC4wNTMtMTQuODA1LTAuMjc3LTIxLjQ4M2MzLjc5Ny02LjY5OSwxMC44OC0xMC44MzcsMTguNTgxLTEwLjgzN2gyNTZjNy42OCwwLDE0Ljc2Myw0LjEzOSwxOC41NiwxMC44MzcNCgkJCUM0MDYuMzM2LDE2Ni44NDgsNDA2LjI1MSwxNzUuMDYxLDQwMi4yODMsMTgxLjY1M3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBvbHlnb24gcG9pbnRzPSIxNjUuNjg3LDE5Mi4wMTMgMjU1Ljk5MSwzNDIuNTQxIDM0Ni4yOTUsMTkyLjAxMyAJCSIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K'
              return (
                <img
                  src={column.sortDirection === SortDirection.Ascend ? down : up}
                  style={{ width: 12, position: 'relative', top: 1 }}
                  alt="sort direction"
                />
              )
            },
          },
          cellEditor: {
            content: props => {
              if (props.column.key === 'addColumn') {
                return <SaveButton {...props} />
              }
              return ''
            },
          },
          headCell: {
            content: props => {
              if (props.column.key === 'addColumn') {
                return <AddButton {...props} />
              }
              const allowedCols = ['story_point', 'value_point']
              if (allowedCols.includes(props.column.key)) {
                return <HeadCell {...props} />
              }
              return ''
            },
          },
        }}
        dispatch={onDispatch}
      />
    </div>
  )
}
