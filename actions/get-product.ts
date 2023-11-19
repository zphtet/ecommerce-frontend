const url = process.env.BACKEND_URL;
const getProduct = async (productId: string, query: string) => {
  try {
    const res = await fetch(`${url}/products/${productId}?${query}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (e) {
    return {
      status: "fail",
      message: (e as any).message,
    };
  }
};

export default getProduct;
