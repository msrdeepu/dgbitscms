import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import Adminroles from "./Tablepages/Adminroles";

function Manageadminroles(props) {
    return (
        <>
            <Head title="admin-pages" />

            <Card title={`Manage admin Roles`}>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <h3>Admin Members</h3>

                    <Button type="primary" icon={<PlusCircleOutlined />}>
                        New Profile
                    </Button>
                </div>
                <Typography.Text>
                    <Adminroles />
                </Typography.Text>
            </Card>
        </>
    );
}

export default Manageadminroles;

Manageadminroles.layout = (page) => <AuthenticatedLayout children={page} />;
