import { useState } from "react";
import Button from "../components/Button";
import { useEffect } from "react";
import ShoppingListItem from "../components/ShoppingListItem";
import CompletedItemsToggleButton from "../components/CompletedItemsToggleButton";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../components/HeaderLogo";
import HeadingTitle from "../components/HeadingTitle";
import Sorting from "../components/Sorting";

export default function ShoppingList() {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [listVisible, setListVisible] = useState(true);
  const [sortBy, setSortBy] = useState("name");
  const [sortCriteria, setSortCriteria] = useState("asc");

  const updateItemStatus = async (item) => {
    item.done = !item.done;
    const url = `${process.env.REACT_APP_API_URL}user/${localStorage.getItem(
      "eika-email"
    )}/items`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("eika-token")}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        getUserShoppingList();
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  };

  const getUserShoppingList = async () => {
    const url = `${process.env.REACT_APP_API_URL}user/${localStorage.getItem(
      "eika-email"
    )}/items?sortBy=${sortBy}&sortCriteria=${sortCriteria}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("eika-token")}`,
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        setItems(responseData);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  };

  useEffect(() => {
    getUserShoppingList();
  }, [sortBy, sortCriteria]);

  return (
    <div className="working-area">
      <HeaderLogo />
      <HeadingTitle title={"Shopping List"} />

      <Sorting
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortCriteria={sortCriteria}
        setSortCriteria={setSortCriteria}
      />

      {items &&
        items
          .filter((i) => i.done === false)
          .map((item, index) => (
            <ShoppingListItem
              key={index}
              item={item}
              updateItemStatus={updateItemStatus}
            />
          ))}

      <CompletedItemsToggleButton
        listVisible={listVisible}
        setListVisible={setListVisible}
      />

      {items &&
        listVisible &&
        items
          .filter((i) => i.done)
          .map((item, index) => (
            <ShoppingListItem
              key={index}
              item={item}
              updateItemStatus={updateItemStatus}
            />
          ))}
      <Button title={"Add Item"} onClick={() => navigate("/add-item")} />
    </div>
  );
}
