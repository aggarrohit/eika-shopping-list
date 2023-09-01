import openEye from "../assets/images/eye_open.png";
import closeEye from "../assets/images/eye_close.png";

export default function CompletedItemsToggleButton({
  listVisible,
  setListVisible,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "15px",
        marginBottom: "15px",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => setListVisible(!listVisible)}
    >
      <img
        height={18}
        width={24}
        src={listVisible ? openEye : closeEye}
        alt={listVisible ? "open-eye-icon" : "closed-eye-icon"}
      />
      <label style={{ marginLeft: "5px" }}>
        {listVisible ? "View completed items" : "Hide completed items"}
      </label>
    </div>
  );
}
