import { useState } from "react"

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function AnimateBox(props) {
    const [hover, setHover] = useState(false)

    return (
        <div style={mainContainer}>
            <div
                style={containerStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div style={{ ...rowStyle }}>
                    <div style={imageDiv}>
                        <img
                            src="https://www.pngall.com/wp-content/uploads/8/Call-Service-Support-PNG-File.png"
                            style={{
                                ...imageStyle,
                                ...imageContainerStyle(hover),
                            }}
                            alt="example"
                        />
                    </div>
                </div>
                <div style={rowStyle}>
                    <div style={columnStyle}>
                        <h2 style={{ color: "#34136e" }}>Apex</h2>
                        <p>Project for a Digital Brand</p>
                    </div>
                    <div
                        style={{
                            ...columnStyle,
                            ...iconContainerStyle(hover),
                            marginLeft: "70px",
                        }}
                    >
                        <i style={iconStyle}>&#x2192;</i>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mainContainer = {
    width: "309px",
    backgroundColor: "white",
    borderRadius: "23px",
    margin: "auto",
    padding: "3px",
}
const containerStyle = {
    height: "auto",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#deddd9",
    borderRadius: "20px",
    margin: "auto",
}

const rowStyle = {
    display: "flex",
    width: "100%",
}
const imageDiv = {
    padding: "30px",
    backgroundColor: "#e7d2d2",
}

const imageContainerStyle = (hover) => ({
    width: "100%",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
    transform: hover ? "scale(1.1)" : "scale(1)",
})

const imageStyle = {
    width: "70%",
    height: "auto",
    display: "block",
    margin: "auto",
}

const columnStyle = {
    // flex: 1,
    display: "grid",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    lineHeight: "10px",
}

const iconContainerStyle = (hover) => ({
    transition: "transform 0.3s ease-in-out",
    transform: hover ? "rotate(-70deg)" : "rotate(0deg)",
})

const iconStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "silver",
    color: "#34136e",
    fontSize: "24px", // Correct font size for the arrow
    lineHeight: "24px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
