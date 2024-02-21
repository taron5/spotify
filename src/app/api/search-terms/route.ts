import { getAll } from '../../../services/firebase/api';

export async function GET() {
  const response = await getAll();

  return Response.json(response);
}
