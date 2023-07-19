import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Input } from "antd";
import { Select, Space, Button } from "antd";
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

import Countriestable from "./Tablepages/Countriestable";

function countryAddButton() {
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

function Managecountries(props) {
    return (
        <>
            <Head title="admin-countries" />

            <Card title={`Manage Countries`}>
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
                        <Input style={{ margin: "10px" }} placeholder="Name" />
                        <Input style={{ margin: "10px" }} placeholder="Order" />
                        <div style={{ margin: "10px" }}>{selectItem()}</div>
                        <div style={{ margin: "10px" }}>
                            {countryAddButton()}
                        </div>
                    </form>
                </div>
                <Countriestable />
            </Card>
        </>
    );
}

Managecountries.layout = (page) => <AuthenticatedLayout children={page} />;

export default Managecountries;
