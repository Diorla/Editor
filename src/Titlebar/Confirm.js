//@ts-check
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

/**
 * @param {{ children: React.ReactNode; title: string | React.ReactNode; message: string | React.ReactNode; acceptFn: ()=> void; cancelFn: ()=> void; }} props
 */
export default (props) => {
  const { children, title, message, acceptFn, cancelFn } = props;
  const [open, setOpen] = useState(false);
  const openConfirm = () => setOpen(true);
  const closeConfirm = () => setOpen(false);

  return (
    <div>
      <div onClick={openConfirm}>{children}</div>
      <Dialog
        open={open}
        onClose={closeConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              acceptFn();
              closeConfirm();
            }}
          >
            Ok
          </Button>
          <Button
            onClick={() => {
              cancelFn();
              closeConfirm();
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
