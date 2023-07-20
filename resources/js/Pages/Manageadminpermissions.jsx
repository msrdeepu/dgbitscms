import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import Adminpermissions from "./Tablepages/Adminpermissions";

function Manageadminpermissions(props) {
    return (
        <>
            <Head title="admin-pages" />

            <Card title={`Manage admin Roles`}>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <h3>Admin Permissions</h3>

                    <Button type="primary" icon={<PlusCircleOutlined />}>
                        New Permission
                    </Button>
                </div>
                <Typography.Text>
                    <Adminpermissions />
                </Typography.Text>
            </Card>
        </>
    );
}

export default Manageadminpermissions;

Manageadminpermissions.layout = (page) => (
    <AuthenticatedLayout children={page} />
);
