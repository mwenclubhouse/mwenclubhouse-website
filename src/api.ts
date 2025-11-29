import { User } from "firebase/auth";

// const URL = "https://api.matthewwen.com/queueup-bot"
const URL = "http://localhost:8000"

export class Queueup {

    // {
    //     teaching_roles: {
    //         "791799058008113182": -1
    //     },
    //     waiting_room: "981758604795326555",
    //         bot_command: "981758388776103986",
    //             queues: {
    //         "993782254469926942": 0,
    //             "981758663863726090": 0
    //     },
    //     rooms: {
    //         "981758750341881946": 0,
    //         "993782494321197136": 0
    //     }
    // }
    static async updateServer(user: User, serverId: string, newSettings: any) {
        try {
            const token = await user.getIdToken();
            const f = await fetch(`${URL}/servers/${serverId}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(newSettings),
                }
            );
            return await f.json();
        }
        catch (e) {
            return undefined;
        }
    }

    static async getServer(user: User, serverId: string) {
        try {
            const token = await user.getIdToken();
            const f = await fetch(`${URL}/servers/${serverId}`,
                {

                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            return await f.json();
        } catch (e) {
            console.log(e);
        }
        return 0;
    }

    static async getServers(user: User) {
        try {
            const token = await user.getIdToken();
            const f = await fetch(`${URL}/servers`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
            return await f.json();
        } catch (e) {
            console.log(e);
        }
        return 0;
    }

}
