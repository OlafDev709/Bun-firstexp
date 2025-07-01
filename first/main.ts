import { $ } from "bun";

const response = await $`ls`.text();

console.log(response);