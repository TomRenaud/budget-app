const Redis = require("ioredis");
const redis = new Redis();

export const saveBackup = (data) => {
    return redis.set("backup", JSON.stringify(data));
};

export const importBackup = async () => {
    return await redis.get("backup");
};