import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card } from "antd";

//Tabs pages
import Metadatatab from "./Tabs/Metadatatab";
import Contenttab from "./Tabs/Contenttab";
import Attachmentstab from "./Tabs/Attachmentstab";
import Calltoaction from "./Tabs/Calltoaction";
import Settings from "./Tabs/Settings";
import Publishtab from "./Tabs/Publishtab";

import { Tabs } from "antd";
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: "1",
        label: `Meta Data`,
        children: <Metadatatab />,
    },

    {
        key: "2",
        label: `Content`,
        children: <Contenttab />,
    },
    {
        key: "3",
        label: `Attachments`,
        children: <Attachmentstab />,
    },
    {
        key: "4",
        label: `Call to Action`,
        children: <Calltoaction />,
    },
    {
        key: "5",
        label: `Settings`,
        children: <Settings />,
    },
    {
        key: "6",
        label: `Publish`,
        children: <Publishtab />,
    },
];

function Createpage(props) {
    return (
        <>
            <Head title="admin-page-create" />

            <Card title={`Create Page Here`}>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </Card>
        </>
    );
}

Createpage.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createpage;
