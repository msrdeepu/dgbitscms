import {
    SearchOutlined,
    EditOutlined,
    CopyOutlined,
    DeleteOutlined,
    CameraOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";

//date
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const withSlashes = [day, month, year].join("/");

const data = [
    {
        key: "1",
        name: "Restaurant & Cafe Interior",
        Type: "Blog",
        Title: "Restaurant & Cafe Interior Gallery",
        order: "1",
        position: "Main",
        Date: withSlashes,
        published: "YES",
    },
    {
        key: "2",
        name: "Shop & Showroom Interior",
        Type: "Web",
        Title: "Shop & Showroom Interior Gallery",
        order: "1",
        position: "Main",
        Date: withSlashes,
        published: "YES",
    },
    {
        key: "3",
        name: "Mosqutio net for window",
        Type: "Demo",
        Title: "Mosqutio net for window",
        order: "1",
        position: "Main",
        Date: withSlashes,
        published: "YES",
    },
    {
        key: "4",
        name: "Mosqutio net for main door",
        Type: "Blog",
        Title: "Mosqutio net for main door",
        order: "1",
        position: "Main",
        Date: withSlashes,
        published: "YES",
    },
];
const Widgettable = () => {
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            close,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1677ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",

            ...getColumnSearchProps("name"),
        },
        {
            title: "Type",
            dataIndex: "Type",
            key: "Type",

            ...getColumnSearchProps("age"),
        },
        {
            title: "Title",
            dataIndex: "Title",
            key: "Title",

            ...getColumnSearchProps("Title"),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Order",
            dataIndex: "order",
            key: "order",
            ...getColumnSearchProps("order"),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Position",
            dataIndex: "position",
            key: "position",
            ...getColumnSearchProps("position"),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ["descend", "ascend"],
        },

        {
            title: "Published",
            dataIndex: "published",
            key: "published",
        },
        {
            title: "Actions",
            dataIndex: "Actions",
            key: "Actions",
            render: () => {
                return (
                    <>
                        <CameraOutlined
                            style={{
                                color: "dodgerblue",
                                margin: "3px",
                                padding: "5px",
                            }}
                        />
                        <EditOutlined
                            style={{
                                color: "green",
                                margin: "3px",
                                padding: "5px",
                            }}
                        />
                        <CopyOutlined
                            style={{
                                color: "orange",
                                margin: "3px",
                                padding: "5px",
                            }}
                        />

                        <DeleteOutlined
                            style={{
                                color: "red",
                                margin: "3px",
                                padding: "5px",
                            }}
                        />
                    </>
                );
            },
        },
    ];
    return <Table columns={columns} dataSource={data} />;
};
export default Widgettable;
