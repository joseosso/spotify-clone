"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Modal
        title="test"
        description="test_description"
        isOpen
        onChange={() => {}}
      >
        Children
      </Modal>
    </>
  );
};

export default ModalProvider;
