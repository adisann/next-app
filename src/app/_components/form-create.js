'use client';
import { useActionState } from 'react';
import { createTransactionAction } from '@/app/_actions/create-transaction';
import { Button, Input } from '@heroui/react';

export const FormCreate = () => {
  const [state, formAction, pending] = useActionState(createTransactionAction, null);
  return (
    <form className="space-y-2" action={formAction}>
      <section>
        <h3 className="text-2xl font-bold text-indigo-500">Create Transaction</h3>
        <p>Input your activity and amount</p>
      </section>
      <Input name="title" placeholder="Input the title" />
      <Input name="amount" type="number" placeholder="Input the amount" />
      <select name="category">
        <option key="debit">Debit</option>
        <option key="kredit">Credit</option>
      </select>
      <Button type="submit" color="primary" isLoading={pending}>
        Save
      </Button>
    </form>
  );
};
