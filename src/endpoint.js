import fetch from "unfetch";

// TODO
const ENDPOINT_URL = "http://0.0.0.0:8090";

class Endpoint {
    path = path => {
        // const url = `${ENDPOINT_URL}/${path}`;
        // return url;
        // TODO mock
        return path;
    };

    // Returns a the body from of the request, as a string.
    get = path => {
        // return fetch(this.path(path));
        // TODO mock
        const isFile = path.split("dot").length > 1;
        if (isFile) {
            return mock.file(path);
        } else {
            return mock.dir(path);
        }
    };

    // Returns the request's parsed body as JSON.
    json = path => JSON.parse(this.get(path));
}

const endpoint = new Endpoint();

// TODO
const FILE_TYPE = {
    FILE: "f",
    DIR: "d",
};

// TODO mock
const mock = {
    file: filepath => {
        const filename = filepath.split("/").pop();
        return JSON.stringify({
            name: filename,
            path: filepath,
            type: FILE_TYPE.FILE,
            size: 1024, // TODO
        });
    },

    dir: dirpath => {
        dirpath = dirpath.replace(/\/?$/, "/").replace(/^\/?/, "/");
        const dirname = (dirpath.match(/\/([a-zA-Z0-9.\-_ ]*)\/$/) || [
            "",
            "",
        ])[1];
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
    },
};

export default endpoint;
