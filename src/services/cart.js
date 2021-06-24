import handleResponse from "helpers/handleAPIResponse";

const baseUrl = "http://localhost:5000/";

const postProduct = () => {
  return fetch(`${baseUrl}addToCart`, {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "appliation/json",
    },
  })
    .then(handleResponse)
    .then((resp) => {
      if (resp.isError) {
        throw new Error("Add products failed");
      } else {
        return resp;
      }
    })
    .catch((err) => {
      throw new Error(err?.message ?? "Add products failed"); // eslint-disable-line
    });
};

export default postProduct;