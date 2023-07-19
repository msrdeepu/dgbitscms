import React from "react";
import Savecancelbuttons from "./Savecancelbuttons";

const Calltoaction = () => {
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
                        <>
                            <p>
                                {" "}
                                <label
                                    style={{ padding: "5px" }}
                                    for="linkheader"
                                >
                                    Header
                                </label>
                            </p>
                        </>
                        <textarea
                            label="Header"
                            style={{
                                padding: "10px",
                                borderRadius: "8px",
                                borderColor: "lightgray",
                            }}
                            rows={3}
                            cols={45}
                            id="linkheader"
                        />
                    </div>
                    <div style={{ margin: "5px", padding: "5px" }}>
                        <p>
                            <label style={{ padding: "5px" }} for="actiontext">
                                Action Text
                            </label>
                        </p>
                        <input
                            style={{
                                padding: "5px",
                                width: "100%",
                                padding: "10px",
                                borderColor: "lightgray",
                                borderStyle: "solid",
                                borderRadius: "8px",
                            }}
                            type="text"
                            id="myfile"
                            name="actiontext"
                            multiple
                            placeholder="Call to Action link text here..."
                        />
                    </div>
                </div>
                <div>
                    <div style={{ margin: "5px", padding: "5px" }}>
                        <>
                            <p>
                                {" "}
                                <label
                                    style={{ padding: "5px" }}
                                    for="linkbody"
                                >
                                    Body
                                </label>
                            </p>
                        </>
                        <textarea
                            label="Header"
                            style={{
                                padding: "10px",
                                borderRadius: "8px",
                                borderColor: "lightgray",
                            }}
                            rows={3}
                            cols={45}
                            id="linkbody"
                        />
                    </div>
                    <div style={{ margin: "5px", padding: "5px" }}>
                        <p>
                            <label style={{ padding: "5px" }} for="linkurl">
                                Link URL
                            </label>
                        </p>
                        <input
                            style={{
                                padding: "5px",
                                width: "100%",
                                padding: "10px",
                                borderColor: "lightgray",
                                borderStyle: "solid",
                                borderRadius: "8px",
                            }}
                            type="text"
                            id="linkurl"
                            name="linkurl"
                            multiple
                            placeholder="Call to Action Link here..."
                        />
                    </div>
                </div>
            </div>
            <Savecancelbuttons />
        </>
    );
};

export default Calltoaction;
