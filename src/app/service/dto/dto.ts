
export type UserData = {
    _id: string;
    fullName: string;
    email: string;
    passwordHash: string;
    avatarUrl: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};
export const userDTO = (user:UserData) => {
    const userDto = {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
        avatarUrl: user.avatarUrl
    }

    return userDto
}