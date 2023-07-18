import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Typography } from "antd";

function Managecountries(props) {
    return (
        <>
            <Head title="admin-countries" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <Typography.Text>Manage Countries</Typography.Text>
            </Card>
        </>
    );
}

Managecountries.layout = (page) => <AuthenticatedLayout children={page} />;

export default Managecountries;
