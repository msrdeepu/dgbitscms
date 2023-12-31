import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import Adminmembers from "./Tablepages/Adminmembers";

function Managemembers(props) {
    return (
        <>
            <Head title="admin-pages" />

            <Card title={`Manage admin Members`}>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <h3>Admin Members</h3>

                    <Button danger icon={<PlusCircleOutlined />}>
                        Create Page
                    </Button>
                </div>
                <Typography.Text>
                    <Adminmembers />
                </Typography.Text>
            </Card>
        </>
    );
}

export default Managemembers;

Managemembers.layout = (page) => <AuthenticatedLayout children={page} />;
