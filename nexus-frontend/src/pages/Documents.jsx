import React, { useEffect, useState } from "react";
import axios from "axios";

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  const API = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: { Authorization: token }
  });

  // 🔹 GET DOCUMENTS
  const fetchDocs = async () => {
    const res = await API.get("/documents/mine");
    setDocuments(res.data);
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  // 🔹 UPLOAD DOCUMENT
  const uploadDoc = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    await API.post("/documents/upload", formData);

    fetchDocs();
  };

  return (
    <div className="p-6 text-white">

      <h1 className="text-3xl font-bold mb-6">📄 Documents</h1>

      {/* UPLOAD SECTION */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">

        <h2 className="mb-4 font-semibold">Upload Document</h2>

        <input
          className="p-2 bg-slate-800 rounded mb-3 w-full"
          placeholder="Document Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="file"
          className="mb-3"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          onClick={uploadDoc}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Upload
        </button>

      </div>

      {/* DOCUMENT LIST */}
      <div className="grid md:grid-cols-2 gap-6">

        {documents.map((doc) => (
          <div
            key={doc._id}
            className="bg-slate-900 p-5 rounded-xl"
          >
            <h2 className="text-lg font-semibold">{doc.title}</h2>

            <p className="text-gray-400 text-sm">
              {doc.fileType}
            </p>

            <p className="mt-2">
              Status:{" "}
              <span className={
                doc.status === "approved"
                  ? "text-green-400"
                  : doc.status === "reviewed"
                  ? "text-yellow-400"
                  : "text-blue-400"
              }>
                {doc.status}
              </span>
            </p>

            {/* VIEW FILE */}
            <a
              href={`http://localhost:5001/${doc.fileUrl}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 mt-3 inline-block"
            >
              View File
            </a>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Documents;