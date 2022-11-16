import React from 'react';
import styled from 'styled-components';

const RadioItem = styled.div`
  display: flex;
  align-items: center;

  margin: 5px 0;
  & input {
    cursor: pointer;
    margin: 0;
  }

  & label {
    margin-left: 5px;
    font-size: 0.8rem;
    min-width: max-content;
    color: gray;
    cursor: pointer;
  }
`;

interface IRadioControlItem {
  label: string;
  id: string;
  value: string;
  selected: string;
  handleChange: any;
}

function RadioControlItem({
  label,
  id,
  value,
  selected,
  handleChange,
}: IRadioControlItem) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value);
  };

  return (
    <RadioItem>
      <input
        type="radio"
        name="date"
        id={id}
        value={value}
        checked={selected === value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </RadioItem>
  );
}

export default RadioControlItem;
