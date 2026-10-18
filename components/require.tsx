import Head from "next/head";

export default function RequireLayout(props: any) {
    return (
        <div>
            <Head>
                <title>MWENCLUBHOUSE</title>
                <meta name={"description"} content={"Content from MWENCLUBHOUSE"}/>
            </Head>
            <div>
                {props.children}
            </div>
        </div>
    )
}
