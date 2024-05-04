import { useState } from "react";
import { Greet } from "../wailsjs/go/main/App";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function App() {
  const [resultText, setResultText] = useState(
    "Please enter your name below 👇"
  );
  const [name, setName] = useState("");
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function greet() {
    Greet(name).then(updateResultText);
  }

  return (
    <div id="App">
      <div className="w-full lg:grid lg:min-h-[600px] xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
            </div>
            <div className="grid gap-4">
              <Button variant="outline" className="w-full">
                Login with GitLab
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have a GitLab account?{" "}
              <a href="#" className="underline">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
