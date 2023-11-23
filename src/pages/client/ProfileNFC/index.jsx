import React from "react";
import { useParams } from "react-router-dom";

const ProfileNFC = () => {
  const { idNFC } = useParams();
  console.log(idNFC);
  return <div>index</div>;
};

export default ProfileNFC;
