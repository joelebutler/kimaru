export type User = {
    username: string;
    email?: string;
    password?: string;
    theme?: string;
}

export type Factor = {
    title: string, // Price
    details: string, // "I want it to be under $5,000"
    user_weighting: number // 2 votes up, or 1 vote net negative
}

export type GeminiRequest = {
    description: string;
    factors: Factor[];
}

export enum APIEndpoints {
    REGISTER = "/api/register",
    GET_USER = "/api/get-user",
    CHANGE_THEME = "/api/theme/change",
    GET_THEME = "/api/theme/get",
    CALL_GEMINI = "/api/gemini"
}