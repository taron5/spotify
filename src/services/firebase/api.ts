import { db } from './config';

export const createSearchResult = async (search: string) => {
  try {
    await db.collection('spotify').add({ searchTerm: search, createdAt: new Date() });
  } catch (e) {
    console.error(e, 'createSearchResult');
  }
};

export const getAll = async () => {
  const data: any = [];

  try {
    const collectionRef = db.collection('spotify');

    const snapshot = await collectionRef.limit(10).orderBy('createdAt', 'desc').get();
    snapshot.docs.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
  } catch (e) {
    console.error(e, 'getAll');
  }

  return data;
};
