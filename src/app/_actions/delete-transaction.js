'use server';
import { API_URL } from '../constants/apiURL';

export default async function deleteTransactionAction(_, id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify([{ id }]),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  revalidatePath('/');
}
