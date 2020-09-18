import React, { useEffect } from "react";
import FirstAndSecond from "./components/FirstAndSecond";
import { Main, Section, Sticky } from "./style";

import GlobalStyles from "./style/global";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Main style={{ height: "1610vh" }}>
        <Section style={{ height: "72.7%" }}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: "9.7%" }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: "10.1%" }}>
          <Sticky className="fourth" />
        </Section>
      </Main>
    </>
  );
}
export default App;
