import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ItemForm({ item }) {
  const [nama, setnama] = useState(item ? item.nama : "");
  const [description, setDescription] = useState(item ? item.description : "");
  const [harga, setharga] = useState(item ? item.harga : "");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemData = { nama, description, harga };

    if (item) {
      await axios.patch(
        `https://crud-pern-server.vercel.app/api/items/${item.id}`,
        itemData
      );
    } else {
      await axios.post(
        "https://crud-pern-server.vercel.app/api/items",
        itemData
      );
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={nama}
          onChange={(e) => setnama(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          value={harga}
          onChange={(e) => setharga(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ItemForm;
