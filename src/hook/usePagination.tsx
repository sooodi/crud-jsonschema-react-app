import { useState, useEffect } from "react";
import { COUNT_LIST_SHOW } from "../utils/functions";

const usePagination = (active: number, total: number) => {
  const [pages, setPages] = useState<unknown[]>([]);

  useEffect(() => {
    // if (total <= 7) {
    //   let arr: unknown[] = [];
    //   for (let i = 1; i <= total; i++) {
    //     arr.push(i);
    //   }
    //   setPages(arr);
    //   return;
    // }
    let totalValue = Math.ceil(total / COUNT_LIST_SHOW);

    if (active <= 4) {
      setPages([1, 2, 3, 4, 5, "...", totalValue]);
    }
    if (active > 4 && active < totalValue - 3) {
      setPages([1, "...", active - 1, active, active + 1, "...", totalValue]);
    }
    if (active > totalValue - 4) {
      if (totalValue > 4)
        setPages([
          1,
          "...",
          totalValue - 4,
          totalValue - 3,
          totalValue - 2,
          totalValue - 1,
          totalValue,
        ]);
      else {
        let pages_ = [];
        for (let i = 1; i < totalValue + 1; i++) pages_.push(i);
        setPages(pages_);
      }
    }
  }, [active, total]);

  return {
    pages,
  };
};

export default usePagination;
