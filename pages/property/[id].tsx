import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Contexts } from "../../contexts/GlobalContext";
import { PropertySection } from "../../styles/pageStyle";

const Property = () => {
  const { mainItems } = useContext(Contexts);
  const router: any = useRouter();
  const parametro = router.query.id;
  const [currentItem, setCurrentItem] = useState<object[]>();

  useEffect(() => {
    mainItems.forEach((item: any, index: any) => {
      if (index == parametro) {
        setCurrentItem([item]);
      }
    });
  }, [mainItems, parametro]);

  return (
    <PropertySection>
      {currentItem &&
        currentItem.map(({ name }: any, index: any) => (
          <div key={index}>
            <h2>{name}</h2>
          </div>
        ))}
    </PropertySection>
  );
};

export default Property;
