import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Typography } from "antd";

function Managecategories(props) {
    return (
        <>
            <Head title="admin-categories" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <Typography.Text>Manage Categories</Typography.Text>
            </Card>
        </>
    );
}

Managecategories.layout = (page) => <AuthenticatedLayout children={page} />;

export default Managecategories;
