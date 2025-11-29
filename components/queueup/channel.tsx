import { Button, Chip, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TagIcon from '@mui/icons-material/Tag';
import MicIcon from '@mui/icons-material/Mic';

const Channel = (props: any) => {
    const { type, item, queueup } = props;
    console.log(queueup);
    console.log(item.id);
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
    return (
        <Button
            style={{ display: "flex", flexFlow: "row", width: '100%' }}>
            {
                type == "text" && <TagIcon />
            }
            {
                type == "vc" && <MicIcon />
            }
            <div>{item.name}</div>
            <div style={{ flex: 1, textAlign: "end" }}/>
            <Stack direction="row" spacing={1}>
                {
                    queueup.bot_command.id === item.id &&
                    <Chip label="Bot Command" onDelete={handleDelete} />
                }
                {
                    queueup.queues.hasOwnProperty(item.id) &&
                    <Chip label="Queue" onDelete={handleDelete} />
                }
                {
                    queueup.waiting_room.id == item.id &&
                    <Chip label="Waiting Room" onDelete={handleDelete} />
                }
            </Stack>
            <ChevronRightIcon />
        </Button>
    )
}

export default Channel;