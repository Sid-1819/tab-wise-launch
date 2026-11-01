import { ImageResponse } from "next/og";

export const alt = "Tab Wise — Chrome side-panel tab manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#F7F4EE",
          color: "#1C1E2A",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: "#5C6173",
          }}
        >
          Featured on Chrome Web Store
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 84, lineHeight: 1.05, fontWeight: 500 }}>Tab Wise</div>
          <div style={{ fontSize: 36, lineHeight: 1.3, color: "#4A4E5C", maxWidth: 820 }}>
            A Chrome side-panel tab manager for search, groups, sessions and recovery.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
