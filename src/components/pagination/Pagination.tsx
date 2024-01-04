import React from "react";
import "./pagination.styles.css";

const Pagination = ({
  pages,
  handleClick,
  active,
}: {
  pages: unknown[];
  handleClick: (event: any) => void;
  active: number;
}) => {
  return (
    <div className="d-flex flex-column w-full mt-4 ">
      <div className="pagination">
        {pages.map((item: any, index) => (
          <li key={index} value={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </div>
      <h6 className="text-center mt-3">Current Page No: {active}</h6>
    </div>
  );
};

export default Pagination;
