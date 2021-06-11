import http from "./index";

export function getTestList(data: any, params: any) {
    return http.request({
        url: "/infomation/list",
        method: "post",
        params: params,
        data
    })
}