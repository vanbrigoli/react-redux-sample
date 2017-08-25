export const formatPrice = (price) => `${price.toFixed(2)} Pesos`;

export const getRawPrice = (formattedPrice) => {
  if (typeof formattedPrice !== 'string')
    return 0;
  return Number(formattedPrice.replace(/[^0-9|.|-]+/g,""));
}