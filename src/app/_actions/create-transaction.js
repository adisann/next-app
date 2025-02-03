'use server';

import { API_URL } from '@/app/constants/apiURL';
import { revalidatePath } from 'next/cache';

export default async function createTransactionAction(_, formData) {
  const title = formData.get('title');
  const amount = Number(formData.get('amount'));
  const category = formData.get('category');

  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify([{ title, amount, category }]),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  revalidatePath('/');
}
