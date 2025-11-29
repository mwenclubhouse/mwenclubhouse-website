import { Button, Card, CardContent, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import RequireLayout from "../../components/require";
import Link from "next/link";
import MyAuth from "../../lib/auth";
import { Queueup } from "../../src/api";

const Dashboard: NextPage = (props) => {
    const [queueupServers, setQueueupServers] = useState<any[]>([]);
    const { user } = MyAuth();
    useEffect(() => {
        if (user) {
            Queueup.getServers(user).then((response) => {
                setQueueupServers(response.servers || []);
            })
        }
    }, [user]);
    return (
        <RequireLayout>
            {
                queueupServers.length > 0 &&
                <Card style={{ margin: 5 }}>
                    <CardContent>
                        <>
                            <Typography variant="h6" style={{ padding: 10 }}>QueueUp Servers</Typography>
                            {
                                queueupServers.map((item: any) => (
                                    <Link
                                        key={item.id}
                                        href={`/dashboard/queueup/${item.id}`}
                                    >
                                        <Button
                                            style={{ display: "flex", flexFlow: "row", padding: 10, width: '100%' }}>
                                            <div>{item.id}</div>
                                            <div style={{ flex: 1, textAlign: "end" }} />
                                            <ChevronRightIcon />
                                        </Button>
                                    </Link>
                                ))
                            }
                        </>
                    </CardContent>
                </Card>
            }
        </RequireLayout>
    )
}
export default Dashboard;