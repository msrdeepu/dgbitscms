import React from "react";

import Savecancelbuttons from "./Savecancelbuttons";

import { DatePicker, Space, Select } from "antd";
const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
};
const onOk = (value) => {
    console.log("onOk: ", value);
};

const { Option } = Select;
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const Publishtab = () => {
    return (
        <>
            <div>
                <h2>Publish Content</h2>
                <hr />
            </div>
            <form action="">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}
                >
                    <Space
                        direction="vertical"
                        style={{ margin: "5px" }}
                        size={12}
                    >
                        <label htmlFor="">
                            Select Publish Date and Expiry date
                        </label>
                        {/* <DatePicker showTime onChange={onChange} onOk={onOk} /> */}
                        <RangePicker
                            format="YYYY-MM-DD"
                            onChange={onChange}
                            onOk={onOk}
                        />
                    </Space>

                    <Space
                        direction="vertical"
                        style={{ margin: "5px" }}
                        size={12}
                    >
                        <label htmlFor="">*Published</label>
                        {/* <DatePicker showTime onChange={onChange} onOk={onOk} /> */}
                        <Select
                            mode="multiple"
                            style={{
                                width: "250px",
                                margin: "5px",
                            }}
                            placeholder="Select Published State..."
                            onChange={handleChange}
                            optionLabelProp="label"
                        >
                            <Option value="YES" label="YES">
                                <Space>YES</Space>
                            </Option>
                            <Option value="NO" label="NO">
                                <Space>NO</Space>
                            </Option>
                        </Select>
                    </Space>

                    <Space
                        direction="vertical"
                        style={{ margin: "5px" }}
                        size={12}
                    >
                        <label htmlFor="">*Content Access</label>
                        {/* <DatePicker showTime onChange={onChange} onOk={onOk} /> */}
                        <Select
                            mode="multiple"
                            style={{
                                width: "250px",
                                margin: "5px",
                            }}
                            placeholder="Select Sccess Level..."
                            onChange={handleChange}
                            optionLabelProp="label"
                        >
                            <Option value="Public" label="Public">
                                <Space>Public</Space>
                            </Option>
                            <Option value="Admin" label="Admin">
                                <Space>Admin</Space>
                            </Option>
                            <Option value="Member" label="Member">
                                <Space>Member</Space>
                            </Option>
                        </Select>
                    </Space>
                </div>
                <Savecancelbuttons />
            </form>
        </>
    );
};

export default Publishtab;
