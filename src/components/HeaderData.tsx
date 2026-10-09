"use client";

import { useEffect, useState } from "react";

const HeaderDate = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      }),
    );
  }, []);

  return <p className="text-sm text-gray-400">{date}</p>;
};

export default HeaderDate;
