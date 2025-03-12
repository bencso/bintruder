export async function rawToFetch(raw) {
    const [requestLine, ...headersAndBody] = raw.split('\n');
    const [method, path, protocol] = requestLine.split(' ');

    const headers = {};
    let body = '';

    let isHeaderSection = true;
    for (const line of headersAndBody) {
        if (isHeaderSection && line === '') {
            isHeaderSection = false;
            continue;
        }
        if (isHeaderSection) {
            const [headerName, headerValue] = line.split(': ');
            headers[headerName] = headerValue;
        } else {
            body += line;
        }
    }

    return {
        method,
        path,
        protocol,
        headers,
        body
    };
}

//https://stackoverflow.com/a/4314050
if (!String.prototype.splice) {
    /**
     * {JSDoc}
     *
     * The splice() method changes the content of a string by removing a range of
     * characters and/or adding new characters.
     *
     * @this {String}
     * @param {number} start Index at which to start changing the string.
     * @param {number} delCount An integer indicating the number of old chars to remove.
     * @param {string} newSubStr The String that is spliced in.
     * @return {string} A new string with the spliced substring.
     */
    String.prototype.splice = function (start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };
}

//https://stackoverflow.com/a/43053803
export const cartesian = (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));