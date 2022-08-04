import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { HomeIcon, ArrowRightIcon } from "@heroicons/react/outline";

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
          onTap={() => {
            // x.current = 90;
            console.log("hello");
          }}
          onDrag={(e, info) => {
            if (x.current >= 90) {
              console.log("wild");
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
        <div>
          <p>Show contact details</p>
        </div>
      ) : (
        <div className="contact-details-container">
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
