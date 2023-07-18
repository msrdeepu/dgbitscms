import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import Tablepages from "./Tablepages/Tablepages";

function Managepages(props) {
    return (
        <>
            <Head title="admin-pages" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <h3>Pages</h3>

                    <Button danger icon={<PlusCircleOutlined />}>
                        Create Page
                    </Button>
                </div>
                <Typography.Text>
                    <Tablepages />
                </Typography.Text>
            </Card>
        </>
    );
}

export default Managepages;

Managepages.layout = (page) => <AuthenticatedLayout children={page} />;
