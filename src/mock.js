// TODO: Unnecessary?
export const ENDPOINT_URL = "http://0.0.0.0:8090";
export const SHOULD_MOCK = true;

export const FILE_TYPE = {
    FILE: "f",
    DIR: "d",
};

export const mockFile = filepath => {
    const filename = filepath.split("/").pop();
    return JSON.stringify({
        name: filename,
        path: filepath,
        type: FILE_TYPE.FILE,
        size: 1024, // TODO
    });
};

export const mockDir = dirpath => {
    dirpath = dirpath.replace(/\/?$/, "/").replace(/^\/?/, "/");
    const dirname = (dirpath.match(/\/([a-zA-Z0-9.\-_ ]*)\/$/) || ["", ""])[1];
    return JSON.stringify({
        name: dirname,
        path: dirpath,
        type: FILE_TYPE.DIR,
        children: [
            `${dirname}-dir`,
            `${dirname}-file.txt`,
            `${dirname}.foo`,
            `${dirname}.bar`,
        ],
    });
};

export const path = path => {
    return path;

    // TODO
    // if (mock.SHOULD_MOCK) {
    //     return path;
    // } else {
    //     const url = `${mock.ENDPOINT_URL}/${path}`;
    //     return url;
    // }
};

export default {
    SHOULD_MOCK,
    ENDPOINT_URL,
    FILE_TYPE,
    path,
    mockFile,
    mockDir,
};
