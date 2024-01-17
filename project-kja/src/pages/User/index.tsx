import React from "react";
import { useParams } from "react-router-dom";

function Index() {
  const { userId } = useParams();
  console.log(userId);
  return <div>user Id: {userId}</div>;
}

export default Index;
