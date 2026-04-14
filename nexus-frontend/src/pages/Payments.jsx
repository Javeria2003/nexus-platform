import React, { useEffect, useState } from "react";
import axios from "axios";

const Payments = () => {
  const [wallet, setWallet] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");

  const token = localStorage.getItem("token");

  const API = axios.create({
    baseURL: "http://localhost:5001/api",
    headers: { Authorization: token }
  });

  // 🔹 GET WALLET
  const fetchWallet = async () => {
    const res = await API.get("/payment/wallet");
    setWallet(res.data);
  };

  // 🔹 GET TRANSACTIONS
  const fetchTransactions = async () => {
    const res = await API.get("/payment/transactions");
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchWallet();
    fetchTransactions();
  }, []);

  // 🔹 DEPOSIT
  const deposit = async () => {
    await API.post("/payment/deposit", { amount: Number(amount) });
    fetchWallet();
    fetchTransactions();
  };

  // 🔹 WITHDRAW
  const withdraw = async () => {
    await API.post("/payment/withdraw", { amount: Number(amount) });
    fetchWallet();
    fetchTransactions();
  };

  return (
    <div className="p-6 text-white">

      <h1 className="text-3xl font-bold mb-6">💰 Payments</h1>

      {/* WALLET CARD */}
      <div className="bg-slate-900 p-6 rounded-xl mb-6">
        <h2 className="text-lg">Wallet Balance</h2>
        <p className="text-3xl font-bold mt-2">
          ${wallet?.balance || 0}
        </p>
      </div>

      {/* ACTIONS */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">

        <h2 className="mb-4 font-semibold">Add / Withdraw Funds</h2>

        <div className="flex gap-3 flex-wrap">
          <input
            type="number"
            placeholder="Enter amount"
            className="p-2 bg-slate-800 rounded"
            onChange={(e) => setAmount(e.target.value)}
          />

          <button
            onClick={deposit}
            className="bg-green-500 px-4 py-2 rounded"
          >
            Deposit
          </button>

          <button
            onClick={withdraw}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Withdraw
          </button>
        </div>

      </div>

      {/* TRANSACTION HISTORY */}
      <div className="bg-slate-900 p-6 rounded-xl">

        <h2 className="text-lg mb-4">Transaction History</h2>

        {transactions.length === 0 ? (
          <p className="text-gray-400">No transactions yet</p>
        ) : (
          <div className="space-y-3">

            {transactions.map((t) => (
              <div
                key={t._id}
                className="flex justify-between bg-slate-800 p-3 rounded"
              >
                <div>
                  <p className="capitalize">{t.type}</p>
                  <p className="text-gray-400 text-sm">
                    {new Date(t.createdAt).toLocaleString()}
                  </p>
                </div>

                <p className={
                  t.type === "deposit"
                    ? "text-green-400"
                    : "text-red-400"
                }>
                  ${t.amount}
                </p>
              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default Payments;