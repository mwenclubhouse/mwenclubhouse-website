import { Typography } from "@mui/material";
import Channel from "./channel";

const Category = (props: any) => {
    const {id, item, queueup} = props;
    return  (
        <div>
            <Typography variant={"subtitle1"}>{item.name}</Typography>
            {
                item.text.map((textChannel: any) => (
                    <Channel
                        key={textChannel.id}
                        type={"text"}
                        item={textChannel}
                        queueup={queueup}
                    />
                ))
            }
            {
                item.vc.map((voiceChannel: any) => (
                    <Channel
                        key={voiceChannel.id}
                        type={"vc"}
                        item={voiceChannel}
                        queueup={queueup}
                    />
                ))
            }
        </div>
    )
}
export default Category;