import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import Widgettable from "./Tablepages/Widgettable";

function Managewidgets(props) {
    return (
        <>
            <Head title="admin-pages" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <h3>Widgets Page</h3>

                    <Button danger icon={<PlusCircleOutlined />}>
                        Create Widget
                    </Button>
                </div>
                <Typography.Text>
                    <Widgettable />
                </Typography.Text>
            </Card>
        </>
    );
}

export default Managewidgets;

Managewidgets.layout = (page) => <AuthenticatedLayout children={page} />;
