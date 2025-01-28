export async function hashingPassword(pass: string){
    const hashedPassword = await Bun.password.hash(pass);
    return hashedPassword
}

export async function matchHashedPassword(pass: string, hashPass: string){
    const isMatch = await Bun.password.verify(pass, hashPass);
    return isMatch
}