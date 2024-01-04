export const COUNT_LIST_SHOW = 15;

export function Paginate(
  data: Array<any>,
  pageNumber: number,
  pageSize?: number
) {
  if (!pageSize) pageSize = COUNT_LIST_SHOW; //defualt size

  let startIndex = (pageNumber - 1) * pageSize;
  // if (searchState && searchState === true) startIndex = 0;
  const dataPaginated = [];
  for (let i = startIndex; i < startIndex + pageSize; i++) {
    if (data[i]) {
      dataPaginated.push(data[i]);
    }
  }
  return dataPaginated;
}
export function isProductExited(products: any, valuesState: any) {
  return products.find((item: any) => item.name === valuesState.name);
}
