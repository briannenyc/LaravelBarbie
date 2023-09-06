import React from "react";
import Salt from "../Components/salt";
import Wave from "../Components/wave";

export default function Home() {
    return (
        <div>
            <div
                style={{
                    position: "relative",
                    maxWidth: "100%",
                    height: "auto",
                }}
            >
                <img
                    src="/img/BlushBg.svg"
                    alt="wave"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%", // Adjust to vertically center the text
                        left: "50%", // Adjust to horizontally center the text
                        transform: "translate(-50%, -50%)", // Center the text both vertically and horizontally
                        backgroundColor: "rgba(255, 255, 255, 0.7)", // Background color for text box
                        padding: "10px", // Add padding to the text box
                        borderRadius: "5px", // Add rounded corners to the text box
						color: "black", // Text color
						fontFamily: 'Roboto', // Set the font-family to the Google Font
                    }}
                >
                    Hi Barbie
                </div>
            </div>

            <Salt />
            {/* <Wave /> */}
        </div>
    );
}
