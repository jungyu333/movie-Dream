import styled from 'styled-components';

const Highlight = styled.span`
  color: red;
`;

const highlightedText = (text, query) => {
  if (
    query !== '' &&
    text
      .toLowerCase()
      .split(' ')
      .join('')
      .includes(query.toLowerCase().split(' ').join(''))
  ) {
    const parts = text.split('');

    return (
      <>
        {parts.map((part, index) =>
          query.toLowerCase().includes(part.toLowerCase()) ? (
            <Highlight key={index}>{part}</Highlight>
          ) : (
            part
          ),
        )}
      </>
    );
  }

  return text;
};

export default highlightedText;
