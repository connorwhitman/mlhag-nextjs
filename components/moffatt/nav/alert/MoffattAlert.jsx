"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const AlertMessage = () => {
  const [show, setShow] = useState(true)

  // On componentDidMount, timer is set
  useEffect(() => {
    const fadeTimeDelay = setTimeout(() => {
      // After set value, set show value to false
      setShow(false)
    }, 5000)

    return () => {
      clearTimeout(fadeTimeDelay)
    }
  }, []);

  // If 'show' is set to false, component will return null
  if (!show) {
    return null;
  }

  // If show is true, component will be rendered
  return (
    <section>
      <div className="moffatt-header-alert">
        <p>
          Please Note: the museum’s last tour on Friday, 8/9 will be at 2:45, to
          prep for <Link href="/">Twilight Tours!</Link>
        </p>
      </div>
    </section>
  );
};

export default AlertMessage;
