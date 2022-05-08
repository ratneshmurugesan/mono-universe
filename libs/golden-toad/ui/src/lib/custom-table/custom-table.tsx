import styled from 'styled-components';
import { Table, Space } from 'antd';
import "./table.scss";
import { useCustomTable } from './useCustomTable';
const { Column } = Table;

type recordProps = {
  key: number
};

const StyledCustomTable = styled.div``

const userData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export function CustomTable() {
  const {
    handleViewProfile,
    handleViewPost
  } = useCustomTable();
  return (
    <StyledCustomTable>
      <Table
        dataSource={userData}
        size="small"
        tableLayout="auto"
      >
        <Column
          title={
            <h2>
              Name
            </h2>
          }
          dataIndex={"name"}
          key={"name"}
          fixed="left"
          render={(text = "") => {
            return <p>{text}</p>;
          }}
        />
        <Column
          title=""
          render={(_, record: recordProps) => {
            console.log("Action", record);

            return (
              <Space size="middle">
                <button
                  onClick={() => handleViewProfile(record.key)}
                >
                  View Profile
                </button>
                <button
                  onClick={() => handleViewPost(record.key)}
                >
                  View Post
                </button>
              </Space>
            );
          }}
        />
      </Table>
    </StyledCustomTable>
  );
}

export default CustomTable;
