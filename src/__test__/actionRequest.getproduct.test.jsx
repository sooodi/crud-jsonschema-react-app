import { renderHook } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import useRequestProduct from "../hook/requests/useRequestProduct";
import { productSlice } from "../store/product/product.reducer";
import { useDispatch } from "react-redux";

// const useDispatchMock = jest.spyOn(useDispatch, "useDispatch");
// useDispatchMock.mockReturnValue(jest.fn());

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn(),
}));
test("useFetch performs GET request", async () => {
  instance = axios.create();
  const mock = new MockAdapter(instance);

  const mockData = "response";
  const url = "http://mock";
  mock.onGet(url).reply(200, mockData);
  mock.onGet(url).networkError();
  // const { result, waitForNextUpdate } = renderHook(() =>
  //   useRequestProduct(url)
  // );

  // // expect(result.current.data).toEqual([]);
  // expect(result.current.loading).toBeTruthy();

  // await waitForNextUpdate();
  const { result } = renderHook(() => useRequestProduct(url));
  const { data, error, loading } = result.current;
  // expect(result.current.data).toEqual("response");
  // expect(result.current.loading).toBeFalsy();
});
