import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Input } from "antd";
import { Select, Space, Button } from "antd";
import Statestable from "./Tablepages/Statestable";

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

function stateAddButton() {
    return (
        <>
            <Button type="primary">Add</Button>
        </>
    );
}

function selectItem() {
    return (
        <>
            <Space wrap>
                <Select
                    defaultValue="--SELECT STATUS--"
                    style={{
                        width: "200px",
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                    ]}
                />
            </Space>
        </>
    );
}

function selectCountry() {
    return (
        <>
            <Space wrap>
                <Select
                    defaultValue="--SELECT COUNTRY--"
                    style={{
                        width: "200px",
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: "INDIA",
                            label: "INDIA",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                    ]}
                />
            </Space>
        </>
    );
}

function Managestates(props) {
    return (
        <>
            <Head title="admin-countries" />

            <Card title={`Manage States`}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <form
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            padding: "25px",
                        }}
                    >
                        <div style={{ margin: "10px" }}>{selectCountry()}</div>
                        <Input style={{ margin: "10px" }} placeholder="Name" />
                        <Input style={{ margin: "10px" }} placeholder="Order" />
                        <div style={{ margin: "10px" }}>{selectItem()}</div>
                        <div style={{ margin: "10px" }}>{stateAddButton()}</div>
                    </form>
                </div>
                <Statestable />
            </Card>
        </>
    );
}

Managestates.layout = (page) => <AuthenticatedLayout children={page} />;

export default Managestates;
