import React from "react";
import Savecancelbuttons from "./Savecancelbuttons";

const Attachmentstab = () => {
    return (
        <>
            <div>
                <h2>Images & Attachments</h2>
                <hr />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                }}
            >
                <div>
                    <div style={{ margin: "5px", padding: "5px" }}>
                        <label style={{ padding: "5px" }} for="myfile">
                            Thumb
                        </label>
                        <input
                            style={{ padding: "5px" }}
                            type="file"
                            id="myfile"
                            name="myfile"
                            multiple
                        />
                    </div>
                    <div style={{ margin: "5px", padding: "5px" }}>
                        <label style={{ padding: "5px" }} for="myfile">
                            Image&nbsp;
                        </label>
                        <input
                            style={{ padding: "5px" }}
                            type="file"
                            id="myfile"
                            name="myfile"
                            multiple
                        />
                    </div>
                    <div style={{ margin: "5px", padding: "5px" }}>
                        <label style={{ padding: "5px" }} for="myfile">
                            Banner
                        </label>
                        <input
                            style={{ padding: "5px" }}
                            type="file"
                            id="myfile"
                            name="myfile"
                            multiple
                        />
                    </div>
                </div>
                <div>
                    <div style={{ margin: "5px", padding: "5px" }}>
                        <label style={{ padding: "5px" }} for="myfile">
                            SEO Banner
                        </label>
                        <input
                            style={{ padding: "5px" }}
                            type="file"
                            id="myfile"
                            name="myfile"
                            multiple
                        />
                    </div>
                    <div style={{ margin: "5px", padding: "5px" }}>
                        <label style={{ padding: "5px" }} for="myfile">
                            Attachment
                        </label>
                        <input
                            style={{ padding: "5px" }}
                            type="file"
                            id="myfile"
                            name="myfile"
                            multiple
                        />
                    </div>
                    <div style={{ margin: "5px", padding: "5px" }}>
                        <label style={{ padding: "5px" }} for="myfile">
                            Attachment
                        </label>
                        <input
                            style={{ padding: "5px" }}
                            type="file"
                            id="myfile"
                            name="myfile"
                            multiple
                        />
                    </div>
                </div>
            </div>
            <Savecancelbuttons />
        </>
    );
};

export default Attachmentstab;
