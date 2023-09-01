import { BLUE_COLOR, GREY_COLOR } from "../utils/Colors";
import imagePlaceholder from "../assets/images/image_placeholder.png";
import tick_icon from "../assets/images/tick_icon.png";
import { useEffect, useState } from "react";

export default function ShoppingListItem({ item, updateItemStatus }) {
  const [imageUrl, setImageURL] = useState();

  useEffect(() => {
    if (item && item.imageUrl) {
      getImage(item.imageUrl);
    }
  }, [item]);

  const getImage = async (imageName) => {
    const url = `${process.env.REACT_APP_API_URL}image/${imageName}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("eika-token")}`,
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const imageUrlObject = URL.createObjectURL(blob);
        setImageURL(imageUrlObject);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "38px",
            width: "38px",
            borderRadius: "8px",
            backgroundColor: GREY_COLOR,
            marginRight: "8px",
          }}
          onClick={() => updateItemStatus(item)}
        >
          {item.done && (
            <div
              style={{
                height: "38px",
                width: "38px",
                borderRadius: "8px",
                backgroundColor: BLUE_COLOR,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img height={18} width={24} src={tick_icon} alt="tick-mark" />
            </div>
          )}
        </div>
        <label>{item.name}</label>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <label>{item.price}</label>
        <div
          style={{
            height: "38px",
            width: "38px",
            borderRadius: "8px",
            backgroundColor: GREY_COLOR,
            marginLeft: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {imageUrl ? (
            <img
              height={38}
              width={38}
              style={{ borderRadius: "8px" }}
              src={imageUrl}
              alt={item.name}
            />
          ) : (
            <img
              height={18}
              width={24}
              src={imagePlaceholder}
              alt="item-placeholder"
            />
          )}
        </div>
      </div>
    </div>
  );
}
