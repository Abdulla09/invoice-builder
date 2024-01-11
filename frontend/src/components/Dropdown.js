import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

const Dropdown = () => {
  return (
    <Select showArrow showSearch optionFilterProp="children" className="antSelect" defaultValue="US dollar">
      <Option value="option1">US dollar</Option>
      <Option value="option2">British Pound</Option>
      <Option value="option3">Euro</Option>
    </Select>
  );
};

export default Dropdown;
