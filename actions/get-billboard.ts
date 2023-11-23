const url = process.env.BACKEND_URL;
const getBillboard = async (id: string) => {
  try {
    const res = await fetch(`${url}/billboards/${id}`, {
      method: "GET",
      next: { revalidate: 60 },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    return { status: "fail", message: (e as any).message };
  }
};

export default getBillboard;
