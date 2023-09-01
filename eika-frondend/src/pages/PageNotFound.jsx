import logo from "../assets/images/logo.svg";
import shoppingImage from "../assets/images/shopping_image.png";

export default function PageNotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "375px",
          height: "667px",
          backgroundColor: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <img
            src={logo}
            style={{ height: "40px", width: "100px" }}
            alt="logo"
          />
        </div>
        <img
          src={shoppingImage}
          style={{ height: "200px", width: "267px" }}
          alt="shopping"
        />

        <label
          style={{
            width: "100%",
            textAlign: "center",
            fontFamily: "Roboto",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "35px",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          Sorry, requested page not found
        </label>
      </div>
    </div>
  );
}
