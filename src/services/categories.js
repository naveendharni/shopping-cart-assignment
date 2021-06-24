import handleResponse from "helpers/handleAPIResponse";

const baseUrl = "http://localhost:5000/";

const fetchCategories = () => {
  return fetch(`${baseUrl}categories`)
    .then(handleResponse)
    .then((resp) => {
      if (resp.isError) {
        throw new Error("Get categories failed");
      } else {
        return resp;
      }
    })
    .catch((err) => {
      throw new Error(err?.message ?? "Get categories failed"); // eslint-disable-line
    });
};

export default fetchCategories;
