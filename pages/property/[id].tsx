import { useRouter } from "next/router";
import React from "react";

const Property = () => {
  const router = useRouter();
  const parametro = router.query.id;
  
  return (
    <div>
      <h2>{parametro}</h2>
    </div>
  );
};

export default Property;
