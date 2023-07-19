import {
    SearchOutlined,
    EditOutlined,
    CopyOutlined,
    DeleteOutlined,
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
        name: "firstpage@domain.com",
        Type: "Blog",
        Title: "Home",
        published: "Yes",
        Date: withSlashes,
    },
    {
        key: "2",
        name: "secondpType@domain.com",
        Type: "Web",
        Title: "Demo",
        published: "No",
        Date: withSlashes,
    },
    {
        key: "3",
        name: "lastpType@domain.com",
        Type: "Demo",
        Title: "About",
        published: "Yes",
        Date: withSlashes,
    },
    {
        key: "4",
        name: "anotherpType@domain.com",
        Type: "Blog",
        Title: "Contact",
        published: "Yes",
        Date: withSlashes,
    },
];
const Adminmembers = () => {
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
            title: "URL",
            dataIndex: "name",
            key: "name",
            width: "30%",
            ...getColumnSearchProps("name"),
        },
        {
            title: "Type",
            dataIndex: "Type",
            key: "Type",
            width: "20%",
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
            title: "Published",
            dataIndex: "published",
            key: "published",
            ...getColumnSearchProps("published"),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Date",
            dataIndex: "Date",
            key: "Date",
            ...getColumnSearchProps("Date"),
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
                        <EditOutlined
                            style={{ color: "green", margin: "3px" }}
                        />
                        <CopyOutlined
                            style={{ color: "orange", margin: "3px" }}
                        />
                        <DeleteOutlined
                            style={{ color: "red", margin: "3px" }}
                        />
                    </>
                );
            },
        },
    ];
    return <Table columns={columns} dataSource={data} />;
};
export default Adminmembers;
