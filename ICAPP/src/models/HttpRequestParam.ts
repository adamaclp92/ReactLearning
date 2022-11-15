import Methods from "./Methods"

interface HttpRequestParam {
    uri: string,
    method?: Methods,
    body?: string,
    headers?: {},
}

export default HttpRequestParam