import React, { useState } from 'react'

export interface pagingProps {
  totalCount: number
}

const Paging: React.FC<pagingProps> = ({ totalCount }) => {
  const pages = Math.floor(totalCount / 5)
  const [page, setPage] = useState(1)

  return (
    <>
      <nav>
        <ul className="flex">
          {page < 5 ? null : (
            <li>
              <a className="pageStyle" href="#" aria-label="Previous">
                <span className="material-icons text-sm">&lt; </span>
              </a>
            </li>
          )}
          <ul className="flex">
            {Array.from(Array(pages), (_, idx) => (
              <li key={idx}>
                <a
                  className={`${
                    page === idx + 1 ? 'activePageStyle' : ''
                  } pageStyle`}
                  href="#"
                  onClick={() => setPage(idx + 1)}
                >
                  {idx + 1}
                </a>
              </li>
            ))}
          </ul>
          <li>
            <a className="pageStyle" href="#" aria-label="Next">
              <span className="material-icons text-sm">&gt;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Paging
