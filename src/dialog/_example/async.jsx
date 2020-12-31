import React, { useState } from 'react';
import { Dialog, Button } from '@tencent/tdesign-react';

export default function BasicUsage() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };
  const handleCloseAsync = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible(false);
      setLoading(false);
    }, 2000);
  };
  return (
    <div>
      <Button theme="primary" onClick={handleClick}>
        Open Modal
      </Button>
      <Dialog
        header="Basic Modal"
        visible={visible}
        loading={loading}
        onClose={handleClose}
        onClickConfirm={handleCloseAsync}
      >
        <p>This is a dialog</p>
      </Dialog>
    </div>
  );
}