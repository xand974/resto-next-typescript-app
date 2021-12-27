type ReviewType = {
  _id: number;
  photoURL: string;
};

export type DishType = {
  _id: number;
  title: string;
  withVegetable: boolean;
  price: number;
  photoURL: string;
};

export const reviews: ReviewType[] = [
  {
    _id: 1,
    photoURL:
      "https://images.unsplash.com/photo-1640542086904-59d2049cb6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: 2,
    photoURL:
      "https://images.unsplash.com/photo-1640542086904-59d2049cb6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: 3,
    photoURL:
      "https://images.unsplash.com/photo-1640542086904-59d2049cb6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: 4,
    photoURL:
      "https://images.unsplash.com/photo-1640542086904-59d2049cb6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: 5,
    photoURL:
      "https://images.unsplash.com/photo-1640542086904-59d2049cb6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: 6,
    photoURL:
      "https://images.unsplash.com/photo-1640542086904-59d2049cb6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    _id: 7,
    photoURL:
      "https://images.unsplash.com/photo-1640542086904-59d2049cb6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

export const sliderItems: DishType[] = [
  {
    _id: 1,
    title: "Salade Papparadelle",
    withVegetable: true,
    price: 40.0,
    photoURL: "/img/salade-thon.png",
  },
  {
    _id: 2,
    title: "Salade Poulet",
    withVegetable: false,
    price: 16.0,
    photoURL: "/img/salade-poulet.png",
  },
  {
    _id: 3,
    title: "Salade Tomate",
    withVegetable: true,
    price: 20.0,
    photoURL: "/img/salade-thon.png",
  },
  {
    _id: 4,
    title: "Salade Boeuf",
    withVegetable: false,
    price: 30.0,
    photoURL: "/img/salade-poulet.png",
  },
  {
    _id: 5,
    title: "Salade Ceasar",
    withVegetable: true,
    price: 40.0,
    photoURL: "/img/salade-ceasar.png",
  },
  {
    _id: 6,
    title: "Salade Poulet",
    withVegetable: false,
    price: 25.0,
    photoURL: "/img/salade-poulet.png",
  },
];
