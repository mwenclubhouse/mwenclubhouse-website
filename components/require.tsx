import Head from "next/head";

export default function RequireLayout(props: any) {
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