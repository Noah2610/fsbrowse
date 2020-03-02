import fetch from "isomorphic-unfetch";
import mock from "./mock";

class Endpoint {
    // Returns a the body from of the request, as a string.
    get = async url => {
        if (mock.SHOULD_MOCK) {
            const isFile = url.split("dot").length > 1;
            if (isFile) {
                return mock.mockFile(url);
            } else {
                return mock.mockDir(url);
            }
        } else {
            return await fetch(url);
        }
    };

    // Returns the request's parsed body as JSON.
    json = async url => (await this.get(url)).json();
}

const endpoint = new Endpoint();

export default endpoint;
