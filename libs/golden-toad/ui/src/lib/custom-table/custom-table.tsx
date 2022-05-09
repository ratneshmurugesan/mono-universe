import styled from 'styled-components';
import { Table, Space } from 'antd';
import "./table.scss";
import { useCustomTable } from './useCustomTable';
const { Column } = Table;

type recordProps = {
  id: number
};

const StyledCustomTable = styled.div``

export const CustomTable = () => {
  const {
    userData,
    handleViewProfile,
    handleViewPost
  } = useCustomTable();

  return (
    <StyledCustomTable>
      <Table
        dataSource={userData}
        size="small"
        tableLayout="auto"
        rowKey="name"
      >
        <Column
          title={
            <h2>
              Name
            </h2>
          }
          dataIndex="name"
          key="name"
          fixed="left"
          render={(text = "") => {
            return <p>{text}</p>;
          }}
        />
        <Column
          title={
            <h2>
              UserName
            </h2>
          }
          dataIndex="username"
          key="username"
          fixed="left"
          render={(text = "") => {
            return <p>{text}</p>;
          }}
        />
        <Column
          title={
            <h2>
              Email
            </h2>
          }
          dataIndex="email"
          key="email"
          fixed="left"
          render={(text = "") => {
            return <p>{text}</p>;
          }}
        />
        <Column
          title={
            <h2>
              Phone
            </h2>
          }
          dataIndex="phone"
          key="phone"
          fixed="left"
          render={(text = "") => {
            return <p>{text}</p>;
          }}
        />
        <Column
          title={
            <h2>
              Website
            </h2>
          }
          dataIndex="website"
          key="website"
          fixed="left"
          render={(text = "") => {
            return <p>{text}</p>;
          }}
        />

        <Column
          title=""
          dataIndex="action"
          key="action"
          render={(_, record: recordProps) => {
            return (
              <Space size="middle">
                <button
                  onClick={() => handleViewProfile(record.id)}
                >
                  View Profile
                </button>
                <button
                  onClick={() => handleViewPost(record.id)}
                >
                  View Post
                </button>
              </Space>
            );
          }}
        />
      </Table>
    </StyledCustomTable>);
};

export default CustomTable;
