'use server';

import { createSearchResult } from '../services/firebase/api';

export async function createSearchTerm(searchTerm: string) {
  return createSearchResult(searchTerm);
}
