import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styled from 'styled-components';

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  const [currPage, setCurrPage] = useState(page);
  let firstNum = currPage - (currPage % 10) + 1;

  return (
    <>
      <Nav className='paging'>
        <Button
          onClick={() => {
            setPage(page - 1);
            setCurrPage(page - 2);
          }}
          disabled={page === 1}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>

        {Array(10)
          .fill()
          .map((_, i) => {
            for (let a = 0; a < 9; a++)
              if (firstNum + i <= numPages) {
                return (
                  <Button
                    border='true'
                    key={i + 1}
                    onClick={() => {
                      setPage(firstNum + i);
                    }}
                    aria-current={page === firstNum + i ? 'page' : null}
                  >
                    {firstNum + i}
                  </Button>
                );
              }
          })}
        <Button
          onClick={() => {
            setPage(page + 1);
            setCurrPage(page);
          }}
          disabled={page === numPages}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 10px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: #301fbf;
  color: white;
  font-size: 1rem;
  margin-right: 5px;
  width: 50px;

  &:hover {
    background: #4c40c0;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
