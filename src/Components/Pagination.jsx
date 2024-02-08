import React from 'react'

const Pagination = ({ setPage, page, currentPage }) => {
  const pageination = Array(page).fill('-');

  const handleSetPageInc = () => {
    if (currentPage === page) return;
    setPage((prev) => prev + 1)
  }

  const handleSetPageDec = () => {
    if (currentPage === 1) return;
    setPage((prev) => prev - 1)
  }

  return (
    <>
      <ul className="pagination pagination-sm mx-2">
        <li className="page-item pointer_cursor" onClick={handleSetPageDec}>
          <p className="page-link">&laquo;</p>
        </li>

        {pageination.map((item, index) => {
          return (
            <>
              <li className={`page-item pointer_cursor ${(index + 1) === currentPage ? 'active' : ''} `} key={index} onClick={() => {
                setPage(index + 1)
              }}>
                <p className="page-link">{index + 1}</p>
              </li>
            </>)
        })}

        <li className="page-item pointer_cursor" onClick={handleSetPageInc}>
          <p className="page-link">&raquo;</p>
        </li>
      </ul>
    </>
  )
}

export default Pagination
