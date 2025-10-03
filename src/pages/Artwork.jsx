import React, { useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import { Button } from "antd";

export default function Artwork() {
  const [showCatalog, setShowCatalog] = useState(false);
  const toggleCatalog = () => {
    setShowCatalog(!showCatalog);
  };

  return (
    <div
      style={{
        minHeight: "600px",
        backgroundColor: "#f3f5f3",
        paddingTop: "80px",
      }}
    >
      <div
        className="m-5 p-5 rounded-3xl"
        style={{
          borderWidth: "8px",
          borderColor: "#c6debe",
          position: "relative",
          minHeight: "400px",
        }}
      >
        {!showCatalog && (
          <Button
            type="primary"
            onClick={toggleCatalog}
            style={{
              backgroundColor: "#d5e7cf",
              color: "#021a00",
              position: "absolute",
              bottom: "20px",
              right: "20px",
            }}
          >
            目录
          </Button>
        )}

        {showCatalog && (
          <div
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              width: "200px",
              height: "375px",
              backgroundColor: "#d5e7cf",
              border: "2px solid #a1bfa0",
              borderRadius: "15px",
              // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3
              onClick={toggleCatalog}
              style={{
                margin: "0",
                color: "#021a00",
                backgroundColor: "#a1bfa0",
                borderRadius: "12px 12px 0px 0px",
                padding: "10px 20px",
              }}
            >
              目录
            </h3>
            <ul style={{ listStyle: "none", padding: "10px 20px", margin: 0 }}>
              <li style={{ padding: "8px 0" }}>1. 作品一</li>
              <li style={{ padding: "8px 0" }}>2. 作品二</li>
              <li style={{ padding: "8px 0" }}>3. 作品三</li>
              <li style={{ padding: "8px 0" }}>4. 作品四</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
