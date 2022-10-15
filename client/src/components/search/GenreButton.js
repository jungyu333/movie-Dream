import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const GenreItem = styled.div`
  background-color: ${props =>
    props.clickedGenre.includes(props.item) ? 'lightgray' : ''};
`;

function GenreButton({ item, setClickedGenre, clickedGenre }) {
  const navigation = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const sortType = searchParams.get('sort');
  const nationFlag = searchParams.get('nationFlag');

  const onClickGenre = () => {
    let clickItem = [];
    clickItem = clickedGenre;
    if (clickItem.includes(item)) {
      clickItem = clickItem.filter(gen => gen !== item);
    } else {
      clickItem.push(item);
    }

    setClickedGenre([...clickItem]);
    const genreFilter = clickItem.join(',');

    navigation(
      `/search?query=${query}&page=${1}&nationFlag=${nationFlag}&sort=${sortType}&genreFilter=${genreFilter}&size=${30}`,
    );
  };
  return (
    <GenreItem clickedGenre={clickedGenre} item={item} onClick={onClickGenre}>
      {item}
    </GenreItem>
  );
}

export default GenreButton;
