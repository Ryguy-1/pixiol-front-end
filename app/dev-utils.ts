export function logIsServer() {
  console.log("isServer: ", typeof window === "undefined");
}
