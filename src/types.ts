export interface Apartment {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  ownerId: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}