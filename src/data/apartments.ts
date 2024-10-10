import { getApartments } from '../utils/db';
import { Apartment } from '../types';

export async function fetchApartments(): Promise<Apartment[]> {
  return getApartments();
}