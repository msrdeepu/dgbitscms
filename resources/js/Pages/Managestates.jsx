import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Typography } from "antd";

function Managestates(props) {
    return (
        <>
            <Head title="admin-states" />
            <Card title={`Welcome, ${props.auth.user.name}`}>
                <Typography.Text>Manage States</Typography.Text>
            </Card>
        </>
    );
}

Managestates.layout = (page) => <AuthenticatedLayout children={page} />;

export default Managestates;
