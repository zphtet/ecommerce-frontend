const url = process.env.BACKEND_URL;
const getCategory = async (categoryid: string) => {
  try {
    const res = await fetch(`${url}/categories/${categoryid}`);
    const data = await res.json();
    return data;
  } catch (e) {
    return { status: "fail", message: (e as any).message };
  }
};

export default getCategory;
