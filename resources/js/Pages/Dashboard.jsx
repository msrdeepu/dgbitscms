import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Typography } from "antd";

function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <Typography.Text>Admin dashboard</Typography.Text>
            </Card>
        </>
    );
}

Dashboard.layout = (page) => <AuthenticatedLayout children={page} />;

export default Dashboard;
