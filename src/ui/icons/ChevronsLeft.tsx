import * as React from "react";

const ChevronsLeft = ({ size = 24 }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M12.707 7.707L11.293 6.293 5.586 12 11.293 17.707 12.707 16.293 8.414 12z" />
    <path d="M16.293 6.293L10.586 12 16.293 17.707 17.707 16.293 13.414 12 17.707 7.707z" />
  </svg>
);

export { ChevronsLeft };
