import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Input } from "antd";
import { Select, Space, Button } from "antd";
import Districtstable from "./Tablepages/Districtstable";

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

function selectDistrict() {
    return (
        <>
            <Space wrap>
                <Select
                    defaultValue="--SELECT STATE--"
                    style={{
                        width: "200px",
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: "AndhraPradesh",
                            label: "AndhraPradesh",
                        },
                        {
                            value: "Telangana",
                            label: "Telangana",
                        },
                        {
                            value: "Tamil Nadu",
                            label: "Tamil Nadu",
                        },
                        {
                            value: "Karnataka",
                            label: "Karnataka",
                        },
                        {
                            value: "Arunachal Pradesh",
                            label: "Arunachal Pradesh",
                        },
                        {
                            value: "Assam",
                            label: "Assam",
                        },
                        {
                            value: "Bihar",
                            label: "Bihar",
                        },
                        {
                            value: "Goa",
                            label: "Goa",
                        },
                        {
                            value: "Gujarat",
                            label: "Gujarat",
                        },
                        {
                            value: "Haryana",
                            label: "Haryana",
                        },
                        {
                            value: "Himachal Pradesh",
                            label: "Himachal Pradesh",
                        },
                        {
                            value: "Jharkhand",
                            label: "Jharkhand",
                        },
                        {
                            value: "Kerala",
                            label: "Kerala",
                        },
                        {
                            value: "Madhya Pradesh",
                            label: "Madhya Pradesh",
                        },
                        {
                            value: "Maharashtra",
                            label: "Maharashtra",
                        },
                        {
                            value: "Manipur",
                            label: "Manipur",
                        },
                        {
                            value: "Meghalaya",
                            label: "Meghalaya",
                        },
                        {
                            value: "Mizoram",
                            label: "Mizoram",
                        },
                        {
                            value: "Nagaland",
                            label: "Nagaland",
                        },
                        {
                            value: "Odisha",
                            label: "Odisha",
                        },
                        {
                            value: "Punjab",
                            label: "Punjab",
                        },
                        {
                            value: "Rajasthan",
                            label: "Rajasthan",
                        },
                        {
                            value: "Sikkim",
                            label: "Sikkim",
                        },
                        {
                            value: "Tripura",
                            label: "Tripura",
                        },
                        {
                            value: "Uttar Pradesh",
                            label: "Uttar Pradesh",
                        },
                        {
                            value: "Uttarakhand",
                            label: "Uttarakhand",
                        },
                        {
                            value: "West Bengal",
                            label: "West Bengal",
                        },
                        {
                            value: "Chhattisgarh",
                            label: "Chhattisgarh",
                        },
                        {
                            value: "Chandigarh",
                            label: "Chandigarh",
                        },
                        {
                            value: "Dadra and Nagar Haveli and Daman and Diu",
                            label: "Dadra and Nagar Haveli and Daman and Diu",
                        },
                        {
                            value: "Delhi",
                            label: "Delhi",
                        },
                        {
                            value: "Jammu and Kashmir",
                            label: "Jammu and Kashmir",
                        },
                        {
                            value: "Ladakh",
                            label: "Ladakh",
                        },
                        {
                            value: "Lakshadweep",
                            label: "Lakshadweep",
                        },
                        {
                            value: "Puducherry",
                            label: "Puducherry",
                        },
                        {
                            value: "Andaman and Nicobar Islands",
                            label: "Andaman and Nicobar Islands",
                        },
                        {
                            value: "Alabama",
                            label: "Alabama",
                        },
                        {
                            value: "Alaska",
                            label: "Alaska",
                        },
                        {
                            value: "Arizona",
                            label: "Arizona",
                        },
                        {
                            value: "Arkansas",
                            label: "Arkansas",
                        },
                        {
                            value: "California",
                            label: "California",
                        },
                        {
                            value: "Colorado",
                            label: "Colorado",
                        },
                        {
                            value: "Connecticut",
                            label: "Connecticut",
                        },
                        {
                            value: "Delaware",
                            label: "Delaware",
                        },
                        {
                            value: "Florida",
                            label: "Florida",
                        },
                        {
                            value: "Georgia",
                            label: "Georgia",
                        },
                        {
                            value: "Hawaii",
                            label: "Hawaii",
                        },
                        {
                            value: "Idaho",
                            label: "Idaho",
                        },
                        {
                            value: "Illinois",
                            label: "Illinois",
                        },
                        {
                            value: "Indiana",
                            label: "Indiana",
                        },
                        {
                            value: "Iowa",
                            label: "Iowa",
                        },
                        {
                            value: "Kansas",
                            label: "Kansas",
                        },
                        {
                            value: "Kentucky",
                            label: "Kentucky",
                        },
                        {
                            value: "Louisiana",
                            label: "Louisiana",
                        },
                        {
                            value: "Maine",
                            label: "Maine",
                        },
                        {
                            value: "Maryland",
                            label: "Maryland",
                        },
                        {
                            value: "Massachusetts",
                            label: "Massachusetts",
                        },
                        {
                            value: "Michigan",
                            label: "Michigan",
                        },
                        {
                            value: "Minnesota",
                            label: "Minnesota",
                        },
                        {
                            value: "Mississippi",
                            label: "Mississippi",
                        },
                        {
                            value: "Missouri",
                            label: "Missouri",
                        },
                        {
                            value: "Montana",
                            label: "Montana",
                        },
                        {
                            value: "Nebraska",
                            label: "Nebraska",
                        },
                        {
                            value: "Nevada",
                            label: "Nevada",
                        },
                        {
                            value: "New Hampshire",
                            label: "New Hampshire",
                        },
                        {
                            value: "New Jersey",
                            label: "New Jersey",
                        },
                        {
                            value: "New Mexico",
                            label: "New Mexico",
                        },
                        {
                            value: "New York",
                            label: "New York",
                        },
                        {
                            value: "North Carolina",
                            label: "North Carolina",
                        },
                        {
                            value: "North Dakota",
                            label: "North Dakota",
                        },
                        {
                            value: "Ohio",
                            label: "Ohio",
                        },
                        {
                            value: "Oklahoma",
                            label: "Oklahoma",
                        },
                        {
                            value: "Oregon",
                            label: "Oregon",
                        },
                        {
                            value: "Pennsylvania",
                            value: "Pennsylvania",
                        },
                        {
                            value: "Rhode Island",
                            value: "Rhode Island",
                        },
                        {
                            value: "South Carolina",
                            value: "South Carolina",
                        },
                        {
                            value: "South Dakota",
                            value: "South Dakota",
                        },
                        {
                            value: "Tennessee",
                            value: "Tennessee",
                        },
                        {
                            value: "Texas",
                            value: "Texas",
                        },
                        {
                            value: "Utah",
                            value: "Utah",
                        },
                        {
                            value: "Vermont",
                            value: "Vermont",
                        },
                        {
                            value: "Virginia",
                            value: "Virginia",
                        },
                        {
                            value: "Washington",
                            value: "Washington",
                        },
                        {
                            value: "West Virginia",
                            value: "West Virginia",
                        },
                        {
                            value: "Wisconsin",
                            value: "Wisconsin",
                        },
                        {
                            value: "Wyoming",
                            value: "Wyoming",
                        },
                    ]}
                />
            </Space>
        </>
    );
}

function Managedistricts(props) {
    return (
        <>
            <Head title="admin-countries" />

            <Card title={`Manage Districts`}>
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
                        <div style={{ margin: "10px" }}>{selectDistrict()}</div>
                        <Input style={{ margin: "10px" }} placeholder="Name" />
                        <Input style={{ margin: "10px" }} placeholder="Order" />
                        <div style={{ margin: "10px" }}>{selectItem()}</div>
                        <div style={{ margin: "10px" }}>{stateAddButton()}</div>
                    </form>
                </div>
                <Districtstable />
            </Card>
        </>
    );
}

Managedistricts.layout = (page) => <AuthenticatedLayout children={page} />;

export default Managedistricts;
