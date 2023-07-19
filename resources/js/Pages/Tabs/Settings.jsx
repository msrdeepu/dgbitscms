import React from "react";
import Savecancelbuttons from "./Savecancelbuttons";

import { Select, Space } from "antd";
const { Option } = Select;
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const Settings = () => {
    return (
        <>
            <div>
                <h2>Images & Attachments</h2>
                <hr />
            </div>
            <form action="">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                    }}
                >
                    <div>
                        <label htmlFor="">*Category</label>
                        <Select
                            mode="multiple"
                            style={{
                                width: "250px",
                                margin: "5px",
                            }}
                            placeholder="select one country"
                            onChange={handleChange}
                            optionLabelProp="label"
                            aria-required
                        >
                            <Option value="general" label="general">
                                <Space>General</Space>
                            </Option>
                            <Option value="About" label="About">
                                <Space>About</Space>
                            </Option>
                            <Option value="Main" label="Main">
                                <Space>Main</Space>
                            </Option>
                            <Option value="Projects" label="Projects">
                                <Space>Projects</Space>
                            </Option>
                            <Option value="Events" label="Events">
                                <Space>Events</Space>
                            </Option>
                            <Option value="Gallery" label="Gallery">
                                <Space>Gallery</Space>
                            </Option>
                            <Option value="News" label="News">
                                <Space>News</Space>
                            </Option>
                            <Option value="Catelog" label="Catelog">
                                <Space>Catelog</Space>
                            </Option>
                        </Select>
                    </div>
                    <div>
                        <label htmlFor="group">*Select Group</label>
                        <Select
                            mode="multiple"
                            style={{
                                width: "250px",
                                margin: "5px",
                            }}
                            placeholder="select one category"
                            onChange={handleChange}
                            optionLabelProp="label"
                        >
                            <Option value="Featured" label="Featured">
                                <Space>Featured</Space>
                            </Option>
                            <Option value="Popular" label="Popular">
                                <Space>Popular</Space>
                            </Option>
                            <Option value="Latest" label="Latest">
                                <Space>Latest</Space>
                            </Option>
                            <Option value="Trending" label="Trending">
                                <Space>Trending</Space>
                            </Option>
                        </Select>
                    </div>
                    <div>
                        <label htmlFor="pglayout">*Page Layout</label>
                        <Select
                            mode="multiple"
                            style={{
                                width: "250px",
                                margin: "5px",
                            }}
                            placeholder="select one country"
                            onChange={handleChange}
                            optionLabelProp="label"
                        >
                            <Option value="fullpage" label="fullpage">
                                <Space>Full Page</Space>
                            </Option>
                            <Option value="mainpage" label="mainpage">
                                <Space>Main Page</Space>
                            </Option>
                            <Option value="gallerypage" label="gallerypage">
                                <Space>Gallery Page</Space>
                            </Option>
                            <Option value="catelog" label="catelog">
                                <Space>Catelog</Space>
                            </Option>
                            <Option value="sidebar" label="sidebar">
                                <Space>Page with Sidebar</Space>
                            </Option>
                            <Option value="listdetails" label="listdetails">
                                <Space>List Details</Space>
                            </Option>
                            <Option value="details" label="details">
                                <Space>Details</Space>
                            </Option>
                            <Option value="home" label="home">
                                <Space>Home Page</Space>
                            </Option>
                            <Option value="contact" label="contact">
                                <Space>Contact Page</Space>
                            </Option>
                            <Option value="listcatelog" label="listcatelog">
                                <Space>List Catelog</Space>
                            </Option>
                            <Option value="catelogpage" label="catelogpage">
                                <Space>Catelog page</Space>
                            </Option>
                            <Option value="404" label="404">
                                <Space>404 Layout</Space>
                            </Option>
                            <Option value="Gallery" label="Gallery">
                                <Space>Gallery</Space>
                            </Option>

                            <Option value="news" label="news">
                                <Space>News Details</Space>
                            </Option>
                        </Select>
                    </div>
                </div>
                <Savecancelbuttons />
            </form>
        </>
    );
};

export default Settings;
