export default {
    serverBaseUrl: "http://localhost:2020",
    api: {
        users: {
            create: "/users",
            fetchOneUser: "/users/",
            update: "/users/",
            fetchAllUser: "/users",
        },
        auth: {
            userLogin: "/auth/login",
            validateToken: "/auth/validate-token",
            refreshToken: "/auth/refresh-token",

        }
    }
}