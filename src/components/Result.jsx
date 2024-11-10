import React from "react";
import { Link } from "react-router-dom";

const Result = () => (
  <div className="card shadow-sm">
    <div className="card-body text-center">
      <h2 className="card-title">Hasil Kuis</h2>
      <p className="lead text-success">
        Selamat! Kamu telah menyelesaikan kuis.
      </p>
      <Link to="/">
        <button className="btn btn-secondary mt-3">
          <i className="bi bi-arrow-repeat"></i> Coba Lagi
        </button>
      </Link>
    </div>
  </div>
);

export default Result;
