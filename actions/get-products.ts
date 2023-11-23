const url = process.env.BACKEND_URL;

const getProducts = async (query: string) => {
  try {
    const res = await fetch(`${url}/products?${query}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (e) {
    return { status: "fail", message: (e as unknown as any).message };
  }
};

export default getProducts;
