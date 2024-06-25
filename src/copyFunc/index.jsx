import React, { useEffect, useRef, useState } from "react";

const CopyFunc = () => {
  const [text, setText] = useState("");

  const ref = useRef(null);

  function handleclick() {
    if (text.length <= 0) {
      alert("Please write something to copy!");
    } else {
      const html = ref.current.innerHTML;
      navigator.clipboard
        .writeText(html)
        .then(() => {
          alert("Content copied successfully!");
          setText("");
        })
        .catch(() => alert("Not copied!"));
    }
  }

  useEffect(() => {
    let wakelock = null;

    if ("wakeLock" in navigator) {
      // Creating the function to request the wakelock
      const requestWakelock = async () => {
        try {
          wakelock = await navigator.wakeLock.request("screen");
          console.log("Wakelock is active!");
          console.log(wakelock);
        } catch (error) {
          console.log(error);
        }
      };

      // Calling the function
      requestWakelock();
    }

    setTimeout(() => {
      // Creating the function ti release the wakelock
      const releaseWaleLock = async () => {
        if (wakelock !== null) {
          await wakelock.release();
          wakelock = null;
          console.log("The wakelock is now released!");
        }
      };

      // Calling the release function
      releaseWaleLock();
    }, 5000);
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="container d-flex justify-content-center align-items-center mt-5 col-12 col-md-8 mx-auto w-100 h-100"
      >
        <div className="border border-secondary rounded-3 p-4 text-center d-flex flex-column gap-3 justify-content-center align-items-center ">
          <input
            type="text"
            className="form-control p-2"
            placeholder="Enter Your Content!"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-success p-1" onClick={handleclick}>
            Click to copy
          </button>
          <div className="d-flex flex-column justify-content-center align-items-center gap-4">
            <label htmlFor="crosscheck">
              Paste the copied content to cross check!
            </label>
            <textarea
              className="p-2 form-control-plaintext custom-scrollbar resize-none"
              name=""
              id=""
              rows={5}
              cols={30}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyFunc;
