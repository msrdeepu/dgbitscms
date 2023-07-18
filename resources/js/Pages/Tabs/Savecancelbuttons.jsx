import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const Savecancelbuttons = () => {
    return (
        <>
            {" "}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button
                    style={{ margin: "10px" }}
                    type="primary"
                    htmlType="submit"
                >
                    Save
                </Button>

                <Button
                    style={{ margin: "10px" }}
                    danger
                    type="primary"
                    htmlType="reset"
                >
                    Cancel
                </Button>
            </div>
            <div style={{ textAlign: "center" }}>
                <p>Note: Fields Marked with (*) Astrik is Mandatory.</p>
            </div>
        </>
    );
};

export default Savecancelbuttons;
