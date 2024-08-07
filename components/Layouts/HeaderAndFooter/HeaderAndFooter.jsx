import React from "react";
import Footer from "../../Sitewide/Footer/Footer";
import Header from "../../Sitewide/Header/Header";

const HeaderAndFooter = ({
  footerData,
  labels,
  headerDataResponse,
  children,
}) => {
  console.log(headerDataResponse,"headerAndFooterjsx")
  return (
    <>
      <Header
        itemsInCart={0}
        labels={labels}
        headerDataResponse={headerDataResponse}
      />
      {children}
      <Footer {...footerData} />
    </>
  );
};

export default HeaderAndFooter;
