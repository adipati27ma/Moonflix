import React from "react";
import { Head } from "@inertiajs/react";
import CustomAuthenticated from "@/Layouts/CustomAuthenticated/Index";

const Dashboard = () => {
    return (
        <>
            <CustomAuthenticated>
                <Head title="Dashboard" />
                <div>Hello Dashboard !!!</div>
            </CustomAuthenticated>
        </>
    );
};

export default Dashboard;
