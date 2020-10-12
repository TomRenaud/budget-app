import util from "util";
import { API_CONF } from "../config/api";

export const saveBackup = async backup => {
    const res = await fetch(util.format(API_CONF.backup.save), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...backup }),
    });
    return res.json();
};

export const importBackup = async () => {
    const res = await fetch(util.format(API_CONF.backup.import), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    return res.json();
};