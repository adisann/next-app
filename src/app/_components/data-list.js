import { API_URL } from '../constants/apiURL';

export const DataList = async () => {
  const res = await fetch(API_URL);
  const { data } = await res.json();

  const allDebitData = data.filter((item) => item.category === 'debit').reduce((acc, item) => acc + item.amount, 0);
  const allCreditData = data.filter((item) => item.category === 'kredit').reduce((acc, item) => acc + item.amount, 0);

  return (
    <div>
      <section>
        <h3>Your activity</h3>
      </section>
      <div>
        {data.map((item) => {
          return (
            <div key={item._id} className="grid grid-cols-3 border p-2 items-center">
              <div>{item.title}</div>
              <div>{item.amount}</div>
              <div>{item.category}</div>
            </div>
          );
        })}
      </div>
      <section>
        <h3 className="text-xl font-semibold">Financial Summary</h3>
        <p>Total Debit: {allDebitData}</p>
        <p>Total Credit: {allCreditData}</p>
        <p>Total Amount: {allDebitData - allCreditData}</p>
      </section>
    </div>
  );
};
