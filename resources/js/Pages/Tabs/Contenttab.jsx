import React from "react";
import { Form, Input } from "antd";

import Savecancelbuttons from "./Savecancelbuttons";
import Layoutone from "../Contenttablayout/Layoutone";
import Layouttwo from "../Contenttablayout/Layouttwo";

import Richeditor from "../Tablepages/Richeditor";

const onFinish = (values) => {
    console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

const Contenttab = () => {
    return (
        <>
            <div>
                <h2>Main Content</h2>
                <hr />
            </div>
            <div>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <div
                            style={{
                                margin: "8px",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                padding: "15px",
                                flexWrap: "wrap",
                            }}
                        >
                            <div>
                                <Form.Item
                                    style={{ margin: "5px" }}
                                    label="Main Header"
                                    name="mheader"
                                    type="text"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your Title here...",
                                        },
                                    ]}
                                >
                                    <Input
                                        type="text"
                                        placeholder="Main Header Text here..."
                                    />
                                </Form.Item>
                                <Form.Item
                                    style={{ margin: "5px", marginTop: "15px" }}
                                    label="Page Type"
                                    name="ptype"
                                    rules={[
                                        {
                                            required: false,
                                            message:
                                                "Please input your password!",
                                        },
                                    ]}
                                >
                                    <select
                                        style={{
                                            width: "100%",
                                            height: "35px",
                                            borderColor: "lightgray",
                                            borderRadius: "6px",
                                            margin: "0px",
                                        }}
                                        name="cars"
                                        id="cars"
                                    >
                                        <option
                                            style={{
                                                padding: "10px",
                                                margin: "3px",
                                            }}
                                            value="Select Page Type"
                                        >
                                            Select Page Type
                                        </option>
                                        <option
                                            style={{
                                                padding: "10px",
                                                margin: "3px",
                                            }}
                                            value="Article"
                                        >
                                            Article
                                        </option>
                                        <option
                                            style={{
                                                padding: "10px",
                                                margin: "3px",
                                            }}
                                            value="Photo Gallery"
                                        >
                                            Photo Gallery
                                        </option>
                                        <option
                                            style={{
                                                padding: "10px",
                                                margin: "3px",
                                            }}
                                            value="Events"
                                        >
                                            Events
                                        </option>
                                        <option
                                            style={{
                                                padding: "10px",
                                                margin: "3px",
                                            }}
                                            value="News"
                                        >
                                            News
                                        </option>
                                        <option
                                            style={{
                                                padding: "10px",
                                                margin: "3px",
                                            }}
                                            value="Product Catelog"
                                        >
                                            Product Catelog
                                        </option>
                                        <option
                                            style={{
                                                padding: "10px",
                                                margin: "3px",
                                            }}
                                            value="Blog Post"
                                        >
                                            Blog Post
                                        </option>
                                        <option
                                            style={{
                                                padding: "10px",
                                                margin: "3px",
                                            }}
                                            value="Web page"
                                        >
                                            Web page
                                        </option>
                                        <option
                                            style={{
                                                padding: "10px",
                                                margin: "3px",
                                            }}
                                            value="Full Page"
                                        >
                                            Full Page
                                        </option>
                                    </select>
                                </Form.Item>
                            </div>
                            <div>
                                <Form.Item
                                    label="Subheader Text"
                                    name="navtext"
                                    type="text"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your Title here...",
                                        },
                                    ]}
                                >
                                    <Input
                                        type="text"
                                        placeholder="Subheader Text here..."
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Link Text"
                                    name="linktext"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your password!",
                                        },
                                    ]}
                                >
                                    <Input
                                        type="text"
                                        placeholder="Link Text here..."
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <Richeditor text="Rich Intro" />
                        <Richeditor text="Rich Body" />
                    </div>

                    <Savecancelbuttons />
                </Form>
            </div>
        </>
    );
};

export default Contenttab;
