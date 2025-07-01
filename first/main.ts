import { BunFile } from "bun";
const password = "super-secure-pa$$word";

const hash = await Bun.password.hash(password);
// => $argon2id$v=19$m=65536,t=2,p=1$tFq+9AVr1bfPxQdh...

try {
    const isMatch = await Bun.password.verify(password, hash);
    // => true
    console.log(isMatch)
} catch (error) {
    console.error("Password verification failed!!!", error);
}