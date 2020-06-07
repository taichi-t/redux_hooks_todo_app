import React, { useState } from "react";
import { useSelector } from "react-redux";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export const useEmojiPicker = (value, setValue, edit, __setMountEvent) => {
  const type = useSelector((state) => state.users.userSettings.type);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [mountEvent, setMountEvent] = useState(false);
  const id = open ? "popper" : undefined;

  const handleEmojiOpen = (e) => {
    if (edit && !edit) return;
    __setMountEvent && __setMountEvent(false);
    setAnchorEl(anchorEl ? null : e.target);
    setOpen(open ? false : true);
    setMountEvent("onClick");
  };

  const handleEmojiSelect = (emoji) => {
    setValue(`${value + emoji.native}`);
  };

  const handleAway = () => {
    setOpen(false);
    setAnchorEl(null);
    setMountEvent(false);
    __setMountEvent && __setMountEvent("onClick");
  };
  const emojipicker = (
    <ClickAwayListener onClickAway={handleAway} mouseEvent={mountEvent}>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        style={{ zIndex: "99999" }}
      >
        <Picker
          set="twitter"
          sheetSize={32}
          theme={type === "light" ? "light" : "dark"}
          perLine={7}
          title=""
          emoji=""
          onSelect={handleEmojiSelect}
        />
      </Popper>
    </ClickAwayListener>
  );
  return [emojipicker, handleEmojiOpen, open];
};
