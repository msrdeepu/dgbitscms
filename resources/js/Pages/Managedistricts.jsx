import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Typography } from "antd";

function Managedistricts(props) {
    return (
        <>
            <Head title="admin-districts" />
            <Card title={`Welcome, ${props.auth.user.name}`}>
                <Typography.Text>Manage Districts</Typography.Text>
            </Card>
        </>
    );
}

Managedistricts.layout = (page) => <AuthenticatedLayout children={page} />;

export default Managedistricts;
