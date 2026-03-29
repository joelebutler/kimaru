// import "./DashboardDialog.module.css";
import * as Ariakit from "@ariakit/react";
import "@front/components/Dialog.module.css";

interface JoinDialogProps {
  open: boolean;
  onClose: () => void;
  joinCode: string;
  setJoinCode: (code: string) => void;
  joinError: string | null;
  setJoinError: (err: string | null) => void;
  onSubmit: (code: string) => void;
}

export function JoinDialog({
  open,
  onClose,
  joinCode,
  setJoinCode,
  joinError,
  setJoinError,
  onSubmit,
}: JoinDialogProps) {
  return (
    <Ariakit.Dialog open={open} onClose={onClose} className="dialog">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setJoinError(null);
          if (!joinCode.trim()) {
            setJoinError("Please enter a room code.");
            return;
          }
          onSubmit(joinCode.trim());
        }}
      >
        <Ariakit.DialogHeading className="heading mb-4">
          Join a Room
        </Ariakit.DialogHeading>
        <label
          className="block mb-2 text-sm font-medium"
          htmlFor="join-room-code"
        >
          Room Code
        </label>
        <input
          id="join-room-code"
          className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-brand"
          value={joinCode}
          onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
          placeholder="Enter code (e.g. 1A2B3C4D)"
          maxLength={8}
          autoFocus
          required
        />
        {joinError && (
          <div className="text-red-600 text-sm mb-2">{joinError}</div>
        )}
        <div className="flex justify-end gap-2 mt-4">
          <Ariakit.DialogDismiss className="button bg-surface/80 hover:bg-brand/60 transition-colors duration-100 text-text text-sm border border-brand/20 rounded-lg text-nowrap hover:cursor-pointer">
            Cancel
          </Ariakit.DialogDismiss>
          <button
            type="submit"
            className="button bg-surface/80 hover:bg-brand/60 transition-colors duration-100 text-text text-sm border border-brand/20 rounded-lg text-nowrap hover:cursor-pointer"
          >
            Join
          </button>
        </div>
      </form>
    </Ariakit.Dialog>
  );
}
