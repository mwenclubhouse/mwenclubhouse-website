import { Button, Card, CardContent, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import RequireLayout from "@components/require";
import MyAuth from "@lib/auth";
import { Queueup } from "@src/api";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Category from "@/components/queueup/category";


const QueueupServer: NextPage = (props: any) => {
    const { user } = MyAuth();
    const { query } = useRouter()
    const [info, setInfo] = useState<any>(undefined);
    const [queueup, setQueueUp] = useState<any>(undefined)
    useEffect(() => {
        if (user && (typeof query.server === "string")) {
            Queueup.getServer(user, query.server).then((response) => {
                setInfo(response.discord)
                setQueueUp(response.queueup)
            })
                .catch((e) => {
                    console.log(e);
                    setInfo(-1);
                })
        }
    }, [user, query.server]);
    if ((!info) && (!queueup)) {
        return (<></>)
    }
    if (info == -1 || queueup == -1) {
        return (<>
            <Typography>Error, You Do Not Have Access to This Page</Typography>
        </>)
    }
    console.log({info, queueup});
    return (
        <RequireLayout>
            <Card style={{ margin: 5 }}>
                <CardContent>
                    {/* It would be so much better if you just list the servers 
                    one by one, and then label them as queue, bot command, queue etc.... */}
                    <Typography style={{textAlign: "center"}}>Discord Channels</Typography>
                    {
                        Object.keys(info.channels).map((id) => (
                            <Category
                                key={id}
                                id={id}
                                item={info.channels[id]}
                                queueup={queueup}
                            />
                        ))
                    }
                </CardContent>
            </Card>

            <Card style={{ margin: 5 }}>
                <CardContent>
                    <Typography style={{textAlign: "center"}}>Teaching Roles</Typography>
                    {
                        Object.keys(queueup.teaching_roles).map((item) => (
                            <Button
                                key={item}
                                style={{ display: "flex", flexFlow: "row", padding: 10, width: '100%' }}>
                                <div>{item}</div>
                                <div style={{ flex: 1, textAlign: "end" }} />
                                <ChevronRightIcon />
                            </Button>
                        ))
                    }
                </CardContent>
            </Card>
        </RequireLayout>
    )
}
export default QueueupServer;