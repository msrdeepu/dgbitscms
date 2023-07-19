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

const addButton = () => {
    return <Button type="primary">Edit</Button>;
};

const deleteButton = () => (
    <Button type="primary" danger>
        Delete
    </Button>
);

//date
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const withSlashes = [day, month, year].join("/");

const data = [
    {
        key: "1",
        id: "1",
        Title: "INDIA",
        order: "248",
        status: "ACTIVE",
        state: "AndhraPradesh",
    },
    {
        key: "2",
        id: "2",
        Title: "USA",
        order: "249",
        status: "ACTIVE",
        state: "AndhraPradesh",
    },
    {
        key: "3",
        id: "3",
        Title: "UK",
        order: "250",
        status: "ACTIVE",
        state: "AndhraPradesh",
    },
    {
        key: "4",
        id: "4",
        Title: "FRANCE",
        order: "251",
        status: "ACTIVE",
        state: "AndhraPradesh",
    },
];
const Areatable = () => {
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
            title: "ID",
            dataIndex: "id",
            key: "id",

            ...getColumnSearchProps("id"),
        },

        {
            title: "Name",
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
            title: "State",
            dataIndex: "state",
            key: "order",
            ...getColumnSearchProps("state"),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            ...getColumnSearchProps("status"),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ["descend", "ascend"],
        },

        {
            title: "Actions",

            dataIndex: "Actions",
            key: "Actions",
            render: () => {
                return (
                    <>
                        <div style={{ margin: "0px" }}>
                            {addButton()} {deleteButton()}
                        </div>
                    </>
                );
            },
        },
    ];
    return <Table columns={columns} dataSource={data} />;
};
export default Areatable;
