import React, {
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import AutoItem from './AutoItem';
import { IAutoMovie, ISearchInputProps } from '../../@types/common';
import { RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { resetSearchInput, setSearchInput } from '../../reducer/auto';
import { loadAutoSearch } from '../../action/auto';
import { resetFilters, setQuery } from '../../reducer/search';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

const HomeLink = styled.div`
  display: flex;
  width: 6vw;
  align-items: center;
  min-width: 60px;
  min-height: 20px;
  margin-right: 10px;
  & img {
    width: 100%;
    filter: invert();
  }
`;

const Input = styled(TextField)`
  width: 100%;
  & label {
    color: lightgray;
  }
  & div {
    border-radius: 15px;
  }
`;

const SearchForm = styled.form`
  width: 100%;
  position: relative;
`;

const LayoutSearch = styled.form`
  border-radius: 10px;
  border: 1px solid lightgray;
  padding: 5px;
`;

const LayoutSearchInput = styled.input`
  color: white;
  background-color: transparent;
  border: none;
  font-size: 0.8rem;
  &:focus {
    outline: none;
  }
`;

const DropDownList = styled.ul<{ isNavSearch?: boolean }>`
  position: absolute;
  background-color: white;
  z-index: 4;
  right: ${props => (props.isNavSearch ? '15px' : '0')};
  margin: ${props => (props.isNavSearch ? '15px 0' : '5px 0')};
  min-width: ${props => (props.isNavSearch ? '400px' : null)};
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 2px solid lightgray;
  border-radius: 10px;
  width: ${props => (props.isNavSearch ? '30%' : '100%')};
`;

const DropDownItem = styled.li<{ selected: boolean }>`
  width: 100%;
  padding: 13px 10px;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &:hover {
    background-color: lightgray;
  }
  background-color: ${props => props.selected && 'lightgray'};
`;

function SearchInput({ isNavSearch, isMain }: ISearchInputProps) {
  const autoRef = useRef<HTMLUListElement>(null);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const [cursor, setCursor] = useState(-1);
  const { searchInput, autoMovies } = useSelector(
    (state: RootState) => state.auto,
  );

  const navigation = useNavigate();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInput(event.target.value));
    dispatch(loadAutoSearch({ query: event.target.value }));

    setCursor(-1);
    setIsOpen(true);
  };

  const onClickAutoItem = useCallback(
    (item: IAutoMovie, index: number) => {
      setCursor(index);
      const content = index !== -1 ? item.movie_id : searchInput;
      setContent(content);
    },
    [searchInput],
  );

  const ArrowDown = 'ArrowDown';
  const ArrowUp = 'ArrowUp';
  const Escape = 'Escape';
  const Enter = 'Enter';
  const handleKeyArrow = (event: KeyboardEvent<HTMLInputElement>) => {
    if (autoMovies && autoMovies.length > 0) {
      switch (event.key) {
        case ArrowDown:
          setCursor(cursor + 1);
          if (autoRef.current?.childElementCount === cursor + 1) setCursor(0);
          break;
        case ArrowUp:
          setCursor(cursor - 1);
          if (cursor <= 0) {
            setCursor(autoMovies.length - 1);
          }
          break;
        case Escape:
          setIsOpen(false);

          break;
        case Enter:
          cursor !== -1
            ? setContent(autoMovies[cursor].movie_id)
            : setContent(searchInput);
          setIsOpen(false);
          dispatch(resetSearchInput());
          break;
        default:
          break;
      }
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContent(searchInput);
  };

  const onClickInput = useCallback(
    (event: React.MouseEvent<HTMLInputElement>) => {
      event.stopPropagation();
      setIsOpen(true);
    },
    [],
  );

  useEffect(() => {
    if (content) {
      if (cursor === -1) {
        dispatch(setQuery(content));
        navigation(`/search?query=${content}`);
        dispatch(resetSearchInput());
        dispatch(resetFilters(content));
      } else {
        navigation(`/movie/${content}`);
        setContent('');
      }

      setCursor(-1);
    }
  }, [content, navigation, cursor, dispatch]);

  useEffect(() => {
    const handleCloseSearch = (event: MouseEvent) => {
      if (
        autoRef.current &&
        !autoRef.current.contains(event.target as HTMLElement)
      ) {
        setIsOpen(false);
        setCursor(-1);
      }
    };

    window.addEventListener('click', handleCloseSearch);
    return () => {
      window.addEventListener('click', handleCloseSearch);
    };
  }, [autoRef, isOpen]);

  useEffect(() => {
    dispatch(resetSearchInput());
  }, [dispatch]);

  return (
    <>
      {isMain ? null : (
        <>
          {isNavSearch ? (
            <LayoutSearch onSubmit={onSubmit} autoComplete="off">
              <LayoutSearchInput
                placeholder="Search"
                onChange={onChange}
                onKeyDown={handleKeyArrow}
                value={
                  cursor === -1 ? searchInput : autoMovies![cursor].h_movie
                }
              />
              {isOpen && autoMovies && autoMovies!.length > 0 ? (
                <DropDownList isNavSearch={true} ref={autoRef}>
                  {autoMovies!.map((movie, index) => (
                    <DropDownItem
                      key={index}
                      selected={cursor === index}
                      onClick={() => onClickAutoItem(movie, index)}
                    >
                      <AutoItem autoMovie={movie} searchInput={searchInput} />
                    </DropDownItem>
                  ))}
                </DropDownList>
              ) : null}
            </LayoutSearch>
          ) : (
            <>
              <HomeLink>
                <img src={'/Moviedream.png'} alt="logo" />
              </HomeLink>
              <Wrapper>
                <SearchForm onSubmit={onSubmit} autoComplete="off">
                  <Input
                    id="outlined-basic"
                    label="영화 검색하기"
                    onChange={onChange}
                    onKeyDown={handleKeyArrow}
                    onClick={onClickInput}
                    value={
                      cursor === -1 ? searchInput : autoMovies![cursor].h_movie
                    }
                  />
                  {isOpen && autoMovies && autoMovies.length > 0 ? (
                    <DropDownList ref={autoRef}>
                      {autoMovies!.map((movie, index) => (
                        <DropDownItem
                          key={index}
                          selected={cursor === index}
                          onClick={() => onClickAutoItem(movie, index)}
                        >
                          <AutoItem
                            autoMovie={movie}
                            searchInput={searchInput}
                          />
                        </DropDownItem>
                      ))}
                    </DropDownList>
                  ) : null}
                </SearchForm>
              </Wrapper>
            </>
          )}
        </>
      )}
    </>
  );
}

export default SearchInput;
