export const actionRequestGet = (endPoint: string) => {
  return {
    method: "GET",
    url: endPoint,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
};

export const actionRequestPost = (endPoint: string,data:any) => {
  return {
    method: "POST",
    url: endPoint,
    data:JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
};
export const actionRequestDelete = (endPoint: string) => {
  return {
    method: "DELETE",
    url: endPoint,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
};

export const actionRequestPut= (endPoint: string,data:any) => {
  return {
    method: "PUT",
    url: endPoint,
    data:JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
};