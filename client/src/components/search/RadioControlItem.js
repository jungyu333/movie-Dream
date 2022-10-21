import React from 'react';
import styled from 'styled-components';

const RadioItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  & input {
    cursor: pointer;
  }

  & label {
    margin-left: 5px;
    font-size: 0.8rem;
    color: gray;
    cursor: pointer;
  }
`;

function RadioControlItem({ label, id, value, selected, handleChange }) {
  const onChange = event => {
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
