import React from "react";

const Question = () => (
  <div className="card shadow-sm">
    <div className="card-body">
      <h5 className="card-title">Contoh Pertanyaan: Apa ibu kota Indonesia?</h5>
      <div className="list-group mt-3">
        <button className="list-group-item list-group-item-action">
          Jakarta
        </button>
        <button className="list-group-item list-group-item-action">
          Bandung
        </button>
        <button className="list-group-item list-group-item-action">
          Surabaya
        </button>
        <button className="list-group-item list-group-item-action">
          Medan
        </button>
      </div>
    </div>
  </div>
);

export default Question;
