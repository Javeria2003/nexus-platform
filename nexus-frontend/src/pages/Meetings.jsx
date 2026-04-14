import React, { useEffect, useState } from "react";
import axios from "axios";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const token = localStorage.getItem("token");

  const fetchMeetings = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/meetings", {
        headers: { Authorization: token },
      });
      setMeetings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  // 🔥 CREATE MEETING
  const createMeeting = async () => {
    try {
      await axios.post(
        "http://localhost:5001/api/meetings",
        {
          title,
          date,
          time,
          entrepreneur: JSON.parse(localStorage.getItem("user"))._id,
        },
        {
          headers: { Authorization: token },
        }
      );

      // refresh list
      fetchMeetings();

      // clear inputs
      setTitle("");
      setDate("");
      setTime("");

    } catch (err) {
      console.log(err);
      alert("Failed to create meeting");
    }
  };

  return (
    <div className="p-6 text-white">

      <h1 className="text-3xl font-bold mb-6">📅 Meetings</h1>

      {/* CREATE FORM */}
      <div className="card mb-6">
        <h2 className="mb-4 font-semibold">Create Meeting</h2>

        <input
          className="input mb-3"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          className="input mb-3"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          className="input mb-3"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button onClick={createMeeting} className="btn btn-primary">
          Create Meeting
        </button>
      </div>

      {/* LIST */}
      {meetings.length === 0 ? (
        <p>No meetings found</p>
      ) : (
        meetings.map((m) => (
          <div key={m._id} className="card mb-4">
            <h2>{m.title}</h2>
            <p>{m.date} - {m.time}</p>
            <p>Status: {m.status}</p>
          </div>
        ))
      )}

    </div>
  );
};

export default Meetings;