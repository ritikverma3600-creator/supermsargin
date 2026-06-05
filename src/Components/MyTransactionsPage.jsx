const transactions = [
  { id: "123456", paymentThrough: "Bank", status: "Success", uniqueId: "123456", quantity: 100, unitPrice: "₹99.00", totalPrice: "₹9900.00", orderNo: "123456", date: "18/06/2025" },
  { id: "123456", paymentThrough: "Bank", status: "Pending", uniqueId: "123456", quantity: 100, unitPrice: "₹99.00", totalPrice: "₹9900.00", orderNo: "123456", date: "18/06/2025" },
];

function MyTransactionsPage() {
  return (
    <div className="w-full bg-[#eef2f7] min-h-screen pb-6">
      <div className="bg-white rounded-b-xl p-6 mx-10">

        <h2 className="font-bold text-gray-800 text-[20px] mb-6">My Transactions</h2>

        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-gray-200">
              {[
                { label: "Transaction ID", sort: true },
                { label: "Payment Through", sort: false },
                { label: "Payment Status", sort: false },
                { label: "Unique Id", sort: false },
                { label: "Quantity", sort: false },
                { label: "Unit Price", sort: false },
                { label: "Total Price", sort: false },
                { label: "Order No.", sort: false },
                { label: "Transaction Date", sort: true },
              ].map((col) => (
                <th key={col.label} className="text-left px-4 py-3 text-gray-700 font-bold whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    {col.label}
                    {col.sort && <span className="text-gray-400 text-xs">⇅</span>}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-4 text-gray-700">{tx.id}</td>
                <td className="px-4 py-4 text-gray-700">{tx.paymentThrough}</td>
                <td className="px-4 py-4 font-medium">
                  <span className={tx.status === "Success" ? "text-green-500" : "text-red-500"}>
                    {tx.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-700">{tx.uniqueId}</td>
                <td className="px-4 py-4 text-gray-700">{tx.quantity}</td>
                <td className="px-4 py-4 text-gray-700">{tx.unitPrice}</td>
                <td className="px-4 py-4 text-gray-700">{tx.totalPrice}</td>
                <td className="px-4 py-4">
                  <a href="#" className="text-[#1a1456] underline font-medium">{tx.orderNo}</a>
                </td>
                <td className="px-4 py-4 text-gray-700">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default MyTransactionsPage;