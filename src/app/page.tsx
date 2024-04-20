"use client";
import Modal from "@/components/modals";
import Form from "@/components/login";
import Register from "@/components/register";
import { Fragment, useState } from "react";

export default function Home() {
  const [showModals, setShowModals] = useState(false);
  const [showModals1, setShowModals1] = useState("login");
  return (
    <Fragment>
      <div className="flex flex-col gap-5 items-center justify-between p-24 bg-white">
        <p className="">Creating Modals</p>
        <div className="flex flex-col gap-4 justify-center">
          <button
            className="w-auto bg-black text-white text-xl px-5 py-2"
            onClick={() => {
              setShowModals(!showModals);
            }}
          >
            Guidelines
          </button>
          <button
            onClick={() => {
              setShowModals1("login");
            }}
            className="w-auto bg-black text-white text-xl px-5 py-2"
          >
            form
          </button>
        </div>
      </div>
      {showModals && <Modal onClose={() => setShowModals(false)} />}
      {showModals1 === "login" && (
        <Form onClose={(val: string) => setShowModals1(val)} />
      )}
      {showModals1 === "register" && (
        <Register onClose={(val: string) => setShowModals1(val)} />
      )}
    </Fragment>
  );
}
