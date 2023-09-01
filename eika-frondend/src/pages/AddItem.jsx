import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../components/HeaderLogo";
import HeadingTitle from "../components/HeadingTitle";

export default function AddItem() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("file", image);
    formData.append("done", false);

    const jwtToken = localStorage.getItem("eika-token");
    const url = `${process.env.REACT_APP_API_URL}user/${localStorage.getItem(
      "eika-email"
    )}/items`;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (response.ok) {
        navigate("/shopping-list");
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="working-area">
      <HeaderLogo />
      <HeadingTitle title={"Add Item to shopping list"} />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
