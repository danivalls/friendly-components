import SectionContainer from 'components/SectionContainer';
import { Table } from 'friendly-components';
import PropTypes from 'prop-types';
import React from 'react';
import { Code, RequiredPropIcon, Title } from './PropsTable.styled';

const columns = [
  {
    label: 'Prop',
    dataIndex: 'prop'
  },
  {
    label: 'Description',
    dataIndex: 'description'
  },
  {
    label: 'Type',
    dataIndex: 'type'
  },
  {
    label: 'Default',
    dataIndex: 'default'
  },
  {
    label: 'Required',
    dataIndex: 'required',
    align: 'center'
  }
];

const PropsTable = ({ props }) => {
  return (
    <SectionContainer>
      <Title>Props</Title>
      <Table
        columns={columns}
        dataSource={props.map((prop) => ({
          prop: <Code>{prop.name}</Code>,
          type: <Code>{prop.type}</Code>,
          description: prop.description,
          default: <Code>{prop.default}</Code>,
          required: <RequiredPropIcon required={props.required} />
        }))}
      />
    </SectionContainer>
  );
};

export default PropsTable;

PropsTable.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      default: PropTypes.string,
      required: PropTypes.bool
    })
  ).isRequired
};
