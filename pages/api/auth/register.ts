import { NextApiRequest, NextApiResponse } from "next";
import argon2 from "argon2";

import { createUser } from "@db/query/user";

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    const credentials = JSON.parse(request.body) as {
        name: string;
        email: string;
        password: string;
    };

    credentials.password = await argon2.hash(credentials.password);

    const registeredUser = await createUser(
        credentials.name,
        credentials.email,
        credentials.password
    );

    registeredUser
        ? response.send(JSON.stringify(true))
        : response.send(JSON.stringify(false));
}
