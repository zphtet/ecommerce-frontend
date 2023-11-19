const url = process.env.BACKEND_URL;
const getBillboard = async (id: string) => {
  try {
    await new Promise((res) => {
      setTimeout(() => {
        res("data");
      }, 300);
    });
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
