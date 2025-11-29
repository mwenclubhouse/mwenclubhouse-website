import Head from "next/head";
import  Router  from "next/router";
import MyAuth from "../lib/auth";

export default function RequireLayout(props: any) {
    const {user, isLoaded} = MyAuth();
    if ((!isLoaded) || (isLoaded && !(user))) {
        if (isLoaded) {
            Router.replace("/login").then();
        }
        return <div>
            <Head>
                <title>MWENCLUBHOUSE</title>
                <meta name={"description"} content={"Login Page"}/>
                <link rel={"icon"} href={"/favicon.ico"} />
            </Head>
        </div>
    }
    return (
        <div>
            <Head>
                <title>MWENCLUBHOUSE</title>
                <meta name={"description"} content={"Content from MWENCLUBHOUSE"}/>
                <link rel={"icon"} href={"/favicon.ico"} />
            </Head>
            <div>
                {props.children}
            </div>
        </div>
    )
}