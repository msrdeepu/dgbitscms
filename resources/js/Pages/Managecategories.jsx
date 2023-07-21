import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Typography } from "antd";
import { Button, Form, Input, Select } from "antd";

import Savecancelbuttons from "./Tabs/Savecancelbuttons";

function Managecategories(props) {
    return (
        <>
            <Head title="admin-categories" />

            <Card title={`Manage Categories here`}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "5px",
                    }}
                >
                    <h1>Folders and edit delete icons here</h1>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "5px",
                    }}
                >
                    <Form>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <h1>Add Category</h1>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ margin: "8px" }}>
                                <Form.Item
                                    name="note"
                                    label="Note"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="note"
                                    label="Note"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="gender"
                                    label="Gender"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Select
                                        placeholder="Select a option and change input text above"
                                        // onChange={onGenderChange}
                                        allowClear
                                    >
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                        <Option value="other">other</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                            <div style={{ margin: "8px" }}>
                                <Form.Item
                                    name="note"
                                    label="Note"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="note"
                                    label="Note"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input type="number" />
                                </Form.Item>
                                <Form.Item
                                    name="gender"
                                    label="Gender"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Select
                                        placeholder="Select a option and change input text above"
                                        // onChange={onGenderChange}
                                        allowClear
                                    >
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                        <Option value="other">other</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <h1>============Rich Layout==========</h1>
                        </div>
                    </Form>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <h1>SEO Details</h1>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Form>
                        <div style={{ display: "flex" }}>
                            <div style={{ margin: "8px" }}>
                                <Form.Item
                                    name="note"
                                    label="Note"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="note"
                                    label="Note"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="note"
                                    label="Note"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <textarea
                                        name=""
                                        id=""
                                        cols="50"
                                        rows="4"
                                        style={{
                                            borderStyle: "solid",
                                            borderColor: "lightgray",
                                            borderRadius: "4px",
                                        }}
                                    ></textarea>
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <h1>Attachments</h1>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Form>
                        <div style={{ display: "flex" }}>
                            <div style={{ margin: "8px" }}>
                                <Form.Item
                                    name="note"
                                    label="Note"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input type="file" />
                                </Form.Item>
                                <Form.Item
                                    name="note"
                                    label="Note"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input type="file" />
                                </Form.Item>
                                <Form.Item
                                    name="note"
                                    label="Note"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input type="file" />
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </div>
                <Savecancelbuttons />
            </Card>
        </>
    );
}

Managecategories.layout = (page) => <AuthenticatedLayout children={page} />;

export default Managecategories;
