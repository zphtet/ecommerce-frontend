export const formatCurrency = (priceInCents: string) => {
  const price = Number(priceInCents) / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
