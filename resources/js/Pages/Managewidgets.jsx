import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Typography } from "antd";

function Managewidgets(props) {
    return (
        <>
            <Head title="admin-widgets" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <Typography.Text>Manage Widgets</Typography.Text>
            </Card>
        </>
    );
}

Managewidgets.layout = (page) => <AuthenticatedLayout children={page} />;

export default Managewidgets;
