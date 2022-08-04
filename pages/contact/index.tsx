import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  HomeIcon,
  ArrowRightIcon,
  MailOpenIcon,
  ClipboardCopyIcon,
} from "@heroicons/react/outline";
import { toast } from "react-toastify";

const Contact: NextPage = () => {
  // const [motionVaue, setMotionValue] = useState(0);
  const [isContactRevealed, setIsContactRevealed] = useState(false);
  let x = useMotionValue(0);
  const background = useTransform(x, [0, 200], ["#f8fafc", "#bef264"]);

  // useEffect(() => {
  //   console.log(x);
  // }, [background, x]);

  return (
    <motion.div className="contact-page-container">
      {/* {!isContactRevealed && (
        <div className="contact-details-container">
          <span className="slide-text-container">
            Slide <ArrowRightIcon />
          </span>
          <p className="notice">to show contact details</p>
        </div>
      )} */}

      <motion.div className="drag-container" style={{ background }}>
        <motion.div
          drag="x"
          className="draggable"
          style={{ x }}
          dragElastic={0}
          dragConstraints={{ left: 0, right: 94 }}
          dragMomentum={false}
          onDrag={(e, info) => {
            if (x.current >= 90) {
              setIsContactRevealed(true);
            } else if (x.current <= 50) {
              setIsContactRevealed(false);
            }
          }}
        >
          {/* Drag */}
        </motion.div>
      </motion.div>

      {isContactRevealed ? (
        <div className="contact-details">
          <div className="label-text">
            <p>Email Address</p>
            <p>philipjonlewis@gmail.com</p>
          </div>
          <div className="copy-email-container">
            <div
              className="copy"
              onClick={() => {
                navigator.clipboard.writeText("philipjonlewis@gmail.com");
                toast.info("Email copied to your clipboard", {
                  position: "top-center",
                  autoClose: 10000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
            >
              <ClipboardCopyIcon />
              <p>Copy Email</p>
            </div>
            <a
              href="mailto:philipjonlewis@gmail.com"
              className="email"
              onClick={() => {
                toast.info("Opening your email app", {
                  position: "top-center",
                  autoClose: 10000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
            >
              <MailOpenIcon />
              <p>Send Email</p>
            </a>
          </div>
        </div>
      ) : (
        <div className="contact-slider-container">
          <span className="slide-text-container">
            Slide <ArrowRightIcon />
          </span>
          <p className="notice">to reveal contact details</p>
        </div>
      )}
    </motion.div>
  );
};

export default Contact;
