const url = process.env.BACKEND_URL;

const getCategories = async () => {
  try {
    const res = await fetch(`${url}/categories`, { next: { revalidate: 60 } });
    const data = await res.json();
    return data;
  } catch (e) {
    return { status: "fail", message: (e as any).message };
  }
};

export default getCategories;
