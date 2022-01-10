export default interface ProductInterface {
  _id: string;
  title: string;
  desc: string;
  img: string;
  prices: [number];
  extraOptions: [{ text: string; price: number }];

  withVegetables: boolean;
}
