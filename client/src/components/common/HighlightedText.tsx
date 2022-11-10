import styled from 'styled-components';
import React from 'react';
import useCreateRex from '../../hooks/useCreateRex';

const Highlight = styled.span`
  color: red;
`;

function HighlightedText(text: string, query: string) {
  const rexQuery = useCreateRex(query);
  if (
    query !== '' &&
    text
      .toLowerCase()
      .split(' ')
      .join('')
      .includes(query.toLowerCase().split(' ').join(''))
  ) {
    const rex = new RegExp(rexQuery);
    const highlighted = text.match(rex);
    const nonHighlighted = text.replace(String(text.match(rex)), '');

    return (
      <>
        {highlighted!.index === 0 ? (
          <>
            <Highlight>{highlighted![0]}</Highlight>
            {nonHighlighted}
          </>
        ) : (
          <>
            {nonHighlighted}
            <Highlight>{highlighted![0]}</Highlight>
          </>
        )}
      </>
    );
  }

  return text;
}

export default HighlightedText;
