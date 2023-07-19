import React from "react";
import { Form, Input } from "antd";
import Savecancelbuttons from "./Savecancelbuttons";
const onFinish = (values) => {
    console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

const Createpageform = () => (
    <>
        <div>
            <h2>Meta Content</h2>
            <hr />
        </div>
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
                <div style={{ margin: "8px" }}>
                    <Form.Item
                        label="Title"
                        name="title"
                        type="text"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Title here...",
                            },
                        ]}
                    >
                        <Input type="text" placeholder="Title here..." />
                    </Form.Item>
                    <Form.Item
                        label="URL / SLUG"
                        name="text"
                        rules={[
                            {
                                required: false,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input type="text" placeholder="URL / SLUG here..." />
                    </Form.Item>
                    <Form.Item
                        label="Navigation Text"
                        name="navtext"
                        type="text"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Title here...",
                            },
                        ]}
                    >
                        <Input
                            type="text"
                            placeholder="Navigation Text here..."
                        />
                    </Form.Item>
                    <Form.Item
                        label="Page Title"
                        name="seotitle"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input type="text" placeholder="SEO Title here" />
                    </Form.Item>
                </div>
                <div style={{ margin: "8px" }}>
                    <Form.Item
                        label="Meta Description"
                        name="meta"
                        rules={[
                            {
                                required: false,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <textarea
                            style={{
                                borderStyle: "sold",
                                borderColor: "lightgray",
                                borderRadius: "8px",
                            }}
                            cols={30}
                            rows={3}
                            placeholder="Meta description here..."
                        />
                    </Form.Item>
                    <Form.Item
                        label="Meta Keywords"
                        name="keywords"
                        rules={[
                            {
                                required: false,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <textarea
                            style={{
                                borderStyle: "sold",
                                borderColor: "lightgray",
                                borderRadius: "8px",
                            }}
                            cols={30}
                            rows={3}
                            placeholder="Meta keywords here..."
                        />
                    </Form.Item>
                </div>
            </div>

            <Savecancelbuttons />
        </Form>
    </>
);
export default Createpageform;
