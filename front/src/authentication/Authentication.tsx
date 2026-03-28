import { Button } from "@front/components/Button";
import { Card } from "@front/components/Card";
import { Header } from "@front/components/Header";
import { Main, PageLayout } from "@front/components/PageLayout";
import { Section } from "@front/components/Section";
import { useState } from "react";
import { useLocation } from "react-router";

function Authentication() {
  const location = useLocation();
  const initialMode = location.pathname === "/register" ? "register" : "login";
  const [mode, setMode] = useState<"login" | "register">(initialMode);

  return (
    <PageLayout>
      <Header noLinks={true} />
      <Main>
        <Section>
          <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[60vh]">
            <Card className="max-w-md w-full mx-auto">
              <h1 className="text-3xl font-bold mb-6 text-center">
                {mode === "login" ? "Login" : "Create an Account"}
              </h1>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="px-4 py-2 rounded border border-brand/30 bg-surface/60 focus:outline-none focus:ring-2 focus:ring-brand"
                  required
                />
                {mode === "register" && (
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 rounded border border-brand/30 bg-surface/60 focus:outline-none focus:ring-2 focus:ring-brand"
                    required
                  />
                )}
                <input
                  type="password"
                  placeholder="Password"
                  className="px-4 py-2 rounded border border-brand/30 bg-surface/60 focus:outline-none focus:ring-2 focus:ring-brand"
                  required
                />
                <Button type="submit" className="w-full mt-2">
                  {mode === "login" ? "Login" : "Register"}
                </Button>
              </form>
              <div className="mt-6 text-center text-sm text-text/70">
                {mode === "login" ? (
                  <>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      className="text-brand hover:underline"
                      onClick={() => setMode("register")}
                    >
                      Register for free!
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="text-brand hover:underline"
                      onClick={() => setMode("login")}
                    >
                      Login!
                    </button>
                  </>
                )}
              </div>
            </Card>
          </div>
        </Section>
      </Main>
    </PageLayout>
  );
}

export default Authentication;
