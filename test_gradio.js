import { Client } from "@gradio/client";

async function test() {
  const client = await Client.connect("RANGSIMUN/peb-project-manager");
  const result = await client.predict("/ai_assistant", [
    "Hello"
  ]);
  console.log(result.data);
}
test();
