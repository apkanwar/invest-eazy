import { collection, getDocs } from 'firebase/firestore';
import { getDB } from './db.mjs';

export const getProperties = async () => {
  const doc_res = await getDocs(collection(getDB(), 'properties'));

  const res = [];

  doc_res.forEach(property => {
    res.push({
      id: property.id,
      ...property.data()
    })
  });

  return res
}