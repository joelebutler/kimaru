import { Button } from "@front/components/Button";
import { Card } from "@front/components/Card";
import { Section } from "@front/components/Section";
import { useState } from "react";
import { Switch } from "@front/components/Switch";
import { Tooltip } from "@front/components/Tooltip";
import { FiInfo } from "react-icons/fi";

function NewRoom() {
  const [loading] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [roomPassword, setRoomPassword] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <Section>
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[60vh]">
        <Card className="max-w-md w-full mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Create a Room</h1>
          <form className="flex flex-col gap-4" autoComplete="off">
            <div>
              <label
                htmlFor="roomName"
                className="text-sm font-medium text-text/80"
              >
                Room Name
              </label>
              <input
                type="text"
                name="roomName"
                placeholder="My Difficult Decision"
                className="px-4 py-2 text-sm rounded border border-brand/30 bg-surface/60 focus:outline-none focus:ring-2 focus:ring-brand w-full"
                required
                // value={form.roomName}
                // onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="flex items-center gap-2 w-full">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <label
                  className="text-sm font-medium text-text/80 whitespace-nowrap"
                  htmlFor="isAnonymous"
                >
                  Anonymous Room
                </label>
                <Tooltip content="If enabled, requests in this room will not be associated with usernames. This is useful for sensitive or unbiased decisions.">
                  <FiInfo className="w-4 h-4 text-brand cursor-pointer" />
                </Tooltip>
              </div>
              <div className="flex-shrink-0">
                <Switch
                  name="isAnonymous"
                  checked={isAnonymous}
                  onChange={setIsAnonymous}
                  aria-label="Anonymous Mode"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 w-full">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <label
                  className="text-sm font-medium text-text/80 whitespace-nowrap"
                  htmlFor="isPrivate"
                >
                  Private Room
                </label>
              </div>
              <div className="flex-shrink-0">
                <Switch
                  name={"isPrivate"}
                  checked={isPrivate}
                  onChange={setIsPrivate}
                  aria-label="Private Room"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="roomPassword"
                className="text-sm font-medium text-text/80"
              >
                Room Password
              </label>
              <input
                type="password"
                name="roomPassword"
                placeholder={
                  isPrivate ? "mysupersecretpassword" : "Room is public..."
                }
                className="px-4 py-2 text-sm rounded border border-brand/30 bg-surface/60 focus:outline-none focus:ring-2 focus:ring-brand w-full disabled:bg-text/5 disabled:italic"
                value={roomPassword}
                onChange={(e) => setRoomPassword(e.target.value)}
                disabled={loading || !isPrivate}
                required={isPrivate}
              />
            </div>

            <Button
              type="submit"
              className="w-full mt-2 px-2 py-1"
              disabled={loading}
            >
              {loading ? "Creating room..." : "Create Room"}
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}

export default NewRoom;
