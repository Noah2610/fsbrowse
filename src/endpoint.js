import fetch from "unfetch";
import mock from "./mock";

class Endpoint {
    // Returns a the body from of the request, as a string.
    get = url => {
        if (mock.SHOULD_MOCK) {
            const isFile = url.split("dot").length > 1;
            if (isFile) {
                return mock.mockFile(url);
            } else {
                return mock.mockDir(url);
            }
        } else {
            return fetch(this.url(url));
        }
    };

    // Returns the request's parsed body as JSON.
    json = url => JSON.parse(this.get(url));
}

const endpoint = new Endpoint();

export default endpoint;
