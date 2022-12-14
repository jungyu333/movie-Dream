import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/store';

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
  handleChange: any;
}

function RadioControlItem({
  label,
  id,
  value,
  handleChange,
}: IRadioControlItem) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value);
  };
  const { selected } = useSelector((state: RootState) => state.search);

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
