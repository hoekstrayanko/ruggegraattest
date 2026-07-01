export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #6d28d9 0%, #db2777 45%, #f97316 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 160, display: "flex", marginBottom: 12 }}>🦴</div>
      <div
        style={{
          fontSize: 84,
          fontWeight: 900,
          color: "white",
          display: "flex",
        }}
      >
        De Ruggegraattest
      </div>
      <div
        style={{
          fontSize: 34,
          color: "rgba(255,255,255,0.9)",
          marginTop: 18,
          display: "flex",
        }}
      >
        Hoe stevig is jouw ruggegraat écht? 😏
      </div>
    </div>
  );
}
