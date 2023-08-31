import jwt, {JwtPayload} from "jsonwebtoken";

export function parsingToken(token: string): string | null{
    const decodedToken:JwtPayload | null = jwt.decode(token, {complete: true})
    return decodedToken ? decodedToken.payload.payload.id : null;
}