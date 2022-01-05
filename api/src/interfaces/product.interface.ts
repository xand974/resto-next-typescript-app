export default interface ProductInterface {
  title: string;
  desc: string;
  img: string;
  prices: [number];
  extraOptions: {
    type: [{ text: string; price: number }];
  };
}
