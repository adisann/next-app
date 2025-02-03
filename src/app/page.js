import { FormCreate } from '@/app/_components/form-create';
import { DataList } from './_components/data-list';

export default function Home() {
  return (
    <div className="max-w-3xl m-auto space-y-4">
      <FormCreate />
      <DataList />
    </div>
  );
}
