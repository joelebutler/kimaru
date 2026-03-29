import type { Factor, ResponseFactor } from "@shared/shared-types";

export const USER_DB: string = "users";
export const ROOM_DB: string = "rooms";
 
const exampleResponse: RESPONSE_TYPE = {
    title: "Title describing the returned item.",
    factors: [
        {
            factorId: 0,
            matchPercent: 0
        },
        {
            factorId: 1,
            matchPercent: 50
        },
        {
            factorId: 2,
            matchPercent: 100
        }
    ]
}

export const SYSTEM_INSTRUCTIONS: string = "We will be sending a description of a problem with several factors to consider. Each factor will be weighted differently based on the value. A higher weight means that it is more important to the decision; an option that has more towards the higher weighted items will be considered a better option. We are expecting 3 options as a result. Each result should be in the format of " + JSON.stringify(exampleResponse)

export type RESPONSE_TYPE = {
    title: string,
    factors: ResponseFactor[]
}