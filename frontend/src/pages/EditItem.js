import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemForm from "../components/ItemForm";

function EditItem() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios.get(`http://localhost:5000/api/items/${id}`);
      setItem(response.data);
    };

    fetchItem();
  }, [id]);

  return (
    <div>
      <h2>Edit Item</h2>
      {item && <ItemForm item={item} />}
    </div>
  );
}

export default EditItem;
