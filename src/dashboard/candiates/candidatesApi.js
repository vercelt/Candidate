export const fetchCandidatesApi = (
  pageSize,
  pageNumber,
  setData,
  setPagination,
  setError,
  setLoading
) => {
  const url = `https://nextjs14-mock-api.vercel.app/api/prospect?pageSize=${pageSize}&pageNumber=${pageNumber}`;
  setLoading(true);
  setError(false);

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setData(data.data);
      setPagination(data.pagination);
    })
    .catch((error) => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
};
