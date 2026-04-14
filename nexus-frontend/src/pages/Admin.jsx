import React from "react";

const Admin = () => {
  return (
    <div className="p-6 text-white">

      <h1 className="text-3xl font-bold mb-6">🧑‍💼 Admin Panel</h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="card">
          <h2>Users</h2>
          <p className="text-gray-400">Manage investors & entrepreneurs</p>
        </div>

        <div className="card">
          <h2>Meetings</h2>
          <p className="text-gray-400">Monitor all scheduled calls</p>
        </div>

        <div className="card">
          <h2>Payments</h2>
          <p className="text-gray-400">Track transactions</p>
        </div>

        <div className="card">
          <h2>Security Logs</h2>
          <p className="text-gray-400">System activity monitoring</p>
        </div>

      </div>

    </div>
  );
};

export default Admin;