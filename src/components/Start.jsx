import React, { useState } from "react";
import { Link } from "react-router-dom";

const Start = () => {
  const [inputScore] = useState(5);

  return (
    <div>
      <h1>Selamat Datang di Kuis Interaktif</h1>
      <p className="lead">Uji pengetahuanmu dengan menjawab pertanyaan!</p>
      <div className="mt-4">
        <label>Set minimal skor benar untuk menyelesaikan kuis:</label>
        <div className="mt-2 d-flex justify-content-center">
          <div
            className="input-group justify-content-center mt-2"
            style={{ maxWidth: "200px" }}
          >
            <button className="btn btn-outline-secondary">
              <i className="bi bi-dash"></i>
            </button>
            <input
              type="text"
              className="form-control text-center"
              value={inputScore}
              readOnly
            />
            <button className="btn btn-outline-secondary">
              <i className="bi bi-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <Link to="/question">
        <button className="btn btn-primary mt-3">
          <i className="bi bi-play-circle-fill"></i> Mulai Kuis
        </button>
      </Link>
    </div>
  );
};

export default Start;
