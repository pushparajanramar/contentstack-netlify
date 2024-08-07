"use client";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import React, { useState } from "react";

const Footer = ({ ...props }) => {
  const {
    contact_info,
    bottom_row_links,
    navigation_group,
    subfooter_copyright,
    contact_info_heading,
    locale_picker_regions,
    brand_logo_icon,
  } = props ?? {};

  const [openGroup, setOpenGroup] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const toggleGroup = (groupTitle) => {
    setOpenGroup((prevOpenGroup) =>
      openGroup.find((item) => item === groupTitle)
        ? prevOpenGroup.filter((item) => item !== groupTitle)
        : [...prevOpenGroup, groupTitle]
    );
  };

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedOption(
          selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1
        );
        break;
      case "ArrowDown":
        e.preventDefault();
        setSelectedOption(
          selectedOption == optionsList.length - 1 ? 0 : selectedOption + 1
        );
        break;
      default:
        break;
    }
  };

  const changeCurrentYear = (subfooter_copyright) => {
    let copyright = subfooter_copyright;
    const currentYear = new Date().getFullYear();
    copyright = copyright?.replace(/\$\{year\}/g, currentYear);
    return <div>{copyright}</div>;
  };

  const socialicons = [
    {
      href: "https://www.instagram.com/",
      className: "logo-instagram",
      ariaLabel: "Instagram",
    },
    {
      href: "https://www.facebook.com/",
      className: "logo-facebook",
      ariaLabel: "Facebook",
    },
    {
      href: "https://twitter.com/",
      className: "logo-twitter",
      ariaLabel: "Twitter",
    },
    {
      href: "https://www.tiktok.com/",
      className: "logo-tiktok",
      ariaLabel: "Tiktok",
    },
    {
      href: "https://www.youtube.com/channel/",
      className: "logo-youtube",
      ariaLabel: "Youtube",
    },
  ];

  return (
    <>
      <nav className="footer cg-footer">
        <div className="footer-social">
          <ul>
            {socialicons?.length > 0 &&
              socialicons?.map((icons, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={icons?.href}
                      className={icons?.className}
                      aria-label={icons?.ariaLabel}
                    ></Link>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="footer-w1 flex flex-wrap">
          <div className="footer-w2 footer-logo w-full xl:w-1/5 lg:grid lg:grid-cols-5">
            {/* <ul className="open">
              <li>
                <Link
                  href="/"
                  className="logo-cg"
                  aria-label="Travis Mathew logo"
                ></Link>
                <svg
                  viewBox="0 0 1800 43"
                  focusable="false"
                  class="chakra-icon css-c2mztj"
                  style={{
                    fill: "#00A9DD",
                    paddingLeft: "30px",
                    paddingTop: "40px",
                    height:"80px"
                  }}
                >
                  <path
                    fill="var(--chakra-colors-content-secondary)"
                    fill-rule="evenodd"
                    d="M26.775 39.099s-4.477 4.01-11.347 3.84C6.088 42.706 0 36.895 0 27.584c0-9.003 6.147-15.94 16.658-15.97 5.545-.016 10.179 4.805 10.179 4.805l-5.208 4.949c.083-.079-2.306-1.712-2.478-1.816-2.751-1.652-6.279-1.68-8.797.493-2.09 1.804-2.639 4.573-2.609 7.23 0 6.168 3.661 9.322 8.824 9.322 2.582 0 5.151-2.536 5.151-2.536l5.055 5.038ZM48.125 28.796c-5.545-.063-10.836-.101-10.836 4.462 0 2.96 1.976 4.315 4.462 4.315 3.187 0 5.418-1.973 6.183-4.13.191-.555.191-1.11.191-1.666v-2.981Zm7.649 6.312c0 2.713.127 5.364.51 7.214h-7.076l-.573-3.33h-.191c-1.85 2.344-5.1 4.008-9.18 4.008-6.245 0-9.751-4.378-9.751-8.941 0-7.523 6.947-11.408 18.42-11.346v-.493c0-5.595-6.355-5.778-10.232-3.959-.267.125-3.351 2.01-3.282 2.087l-3.433-3.769s4.295-5.223 11.976-4.965c10.939.367 12.812 6.105 12.812 12.703v10.79ZM61.154 21.974c0-4.07-.06-7.03-.246-9.682h6.516l.307 5.673h.185c1.475-4.193 7.27-6.351 10.528-6.351.737 0 1.168.061 1.782.185v7.091c-.676-.123-1.352-.185-2.274-.185-3.565 0-8.377 2.282-9.053 5.735-.123.678-.184 1.48-.184 2.281v15.6h-7.56V21.975ZM97.554 4.032v8.26h7.765v5.673h-7.765v13.257c0 6.045 2.13 5.55 5.018 5.55 1.352 0 2.09-.062 2.951-.308l.123 5.734c-1.107.432-4.281.802-6.617.802-2.827 0-5.102-.925-6.515-2.466-1.66-1.728-2.397-4.502-2.397-8.449v-14.12h-5.96v-5.673h5.96V3.936l7.437.096ZM130.256 24.131c.066-2.774-1.278-7.337-6.789-7.337-5.109 0-7.259 4.255-7.595 7.337h14.384Zm-14.384 5.303c-.17 0 .832 3.466.989 3.775a7.506 7.506 0 0 0 2.481 2.78c3.532 2.406 10.051 1.706 12.142-2.44l5.54 3.455c-3.305 4.574-7.508 5.935-12.213 5.935-10.619 0-16.87-5.982-16.87-15.169 0-8.325 5.511-16.156 15.997-16.156 10.619 0 14.113 8.016 14.113 14.614 0 1.418-.134 2.528-.268 3.206h-21.911ZM142.379 21.974c0-4.07-.062-7.03-.246-9.682h6.515l.308 5.673h.184c1.475-4.193 7.271-6.351 10.529-6.351.737 0 1.167.061 1.783.185v7.091c-.677-.123-1.353-.185-2.275-.185-3.565 0-8.377 2.282-9.053 5.735a13.19 13.19 0 0 0-.185 2.281v15.6h-7.56V21.975ZM175.553 0l-5.038 14.442h-5.681L168.344 0h7.209ZM176.242 34.143c-.478.447 3.165 2.598 3.546 2.757 2.407 1.006 7.621.885 7.621-2.779 0-2.036-1.388-3.021-5.556-4.379-6.599-1.972-9.309-5.18-9.309-8.755 0-5.303 4.932-9.352 12.782-9.373 5.966-.016 9.603 4.662 9.603 4.662l-4.6 4.153c.272-.247-2.804-1.97-3.058-2.097-1.929-.967-6.529-1.377-6.529 1.853 0 1.912 1.596 2.775 5.905 4.193 6.182 1.912 8.96 4.686 9.029 9.126 0 5.488-4.793 9.462-13.755 9.435-6.573-.02-10.296-4.427-10.296-4.427l4.617-4.37ZM203.274 13.227a3.877 3.877 0 0 0-3.867 3.879 3.877 3.877 0 0 0 3.867 3.879 3.877 3.877 0 0 0 3.867-3.88c0-2.139-1.734-3.878-3.867-3.878Zm0 8.62c-2.606 0-4.726-2.127-4.726-4.741s2.12-4.742 4.726-4.742c2.605 0 4.726 2.128 4.726 4.742s-2.121 4.74-4.726 4.74Z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="var(--chakra-colors-content-secondary)"
                    fill-rule="evenodd"
                    d="M202.475 16.953h.551c.624 0 1.009-.334 1.009-.84 0-.551-.384-.816-.987-.816-.294 0-.483.023-.573.045v1.611Zm-.92-2.246a8.02 8.02 0 0 1 1.402-.113c.731 0 1.221.121 1.568.408.28.235.437.59.437 1.028 0 .658-.444 1.104-.927 1.271v.023c.37.135.588.491.709.983.165.635.301 1.224.399 1.42h-.95c-.075-.15-.203-.566-.338-1.202-.152-.665-.386-.876-.912-.892h-.468v2.095h-.92v-5.021Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                
              </li>
            </ul> */}
           <Image
           className="cg-logo desktop-logo"
           loader={() => brand_logo_icon?.url}
           unoptimized={true}
           src={brand_logo_icon?.url}
          //  alt={headerData?.header_nav?.alt_tag}
           width="200"
           height="200"
           aria-label="cg-logo"
           style={{ color: "white", paddingLeft: "20px" }}
           />
          </div>

          {/* Desktop */}

          {navigation_group?.length > 0 &&
            navigation_group?.map((eachGroup, index) => (
              <div
                className={`footer-w2 w-full xl:w-1/5 px-4 ${
                  index == 2 ? "rewards" : ""
                } ${
                  openGroup.includes(eachGroup?.column_title) ? "active" : ""
                } 
                ${eachGroup?.column_title == "Shop" ? "shop" : null}`}
                key={eachGroup?.column_title}
              >
                <button
                  className={`footerbtn ${
                    openGroup.includes(eachGroup?.column_title) ? "active" : ""
                  } `}
                  aria-label={isOptionsOpen ? "plus" : "minus"}
                  onClick={() => toggleGroup(eachGroup?.column_title)}
                ></button>
                <h4 onClick={() => toggleGroup(eachGroup?.column_title)}>
                  {eachGroup?.column_title}
                </h4>
                <ul
                  className={
                    openGroup.includes(eachGroup?.column_title) ? "open" : ""
                  }
                >
                  {eachGroup?.navigation_node?.length > 0 &&
                    eachGroup?.navigation_node.map((eachNode) => (
                      <li key={eachNode?.title}>
                        <Link href={eachNode?.href} className="p-xs">
                          {eachNode?.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}

          <div className="footer-w2 w-full xl:w-1/5 px-4 contact-us">
            <h4>{contact_info_heading}</h4>
            {contact_info ? <ul>{parse(contact_info)}</ul> : ""}
          </div>
        </div>

        <div className="footer-preferences">
          <div className="footer-w3">
            <div className="country-selector p-xs">
              <div>
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={isOptionsOpen}
                  className={`csbutton ${
                    isOptionsOpen ? "expanded" : ""
                  } flag-${
                    locale_picker_regions
                      ? locale_picker_regions[selectedOption]
                          ?.flag_variable_pairing
                      : ""
                  }`}
                  aria-label={isOptionsOpen ? "plus" : "minus"}
                  onClick={toggleOptions}
                  onKeyDown={handleListKeyDown}
                >
                  {locale_picker_regions
                    ? locale_picker_regions[selectedOption]?.region_name
                    : ""}
                </button>

                <ul
                  className={`options ${isOptionsOpen ? "show" : ""}`}
                  role="listbox"
                  aria-activedescendant={
                    locale_picker_regions
                      ? locale_picker_regions[selectedOption]?.region_name
                      : ""
                  }
                  tabIndex={-1}
                  onKeyDown={handleListKeyDown}
                >
                  {locale_picker_regions?.length > 0 &&
                    locale_picker_regions?.map((option, index) =>
                      selectedOption !== index ? (
                        <li
                          className={`country flag-${option.flag_variable_pairing}`}
                          id={`option-${option.flag_variable_pairing}`}
                          data-country={option.flag_variable_pairing}
                          key={index}
                          role="option"
                          aria-selected={selectedOption == index}
                          tabIndex={0}
                          onKeyDown={handleKeyDown(index)}
                          onClick={() => {
                            setSelectedThenCloseDropdown(index);
                          }}
                        >
                          {option?.region_name}
                        </li>
                      ) : null
                    )}
                </ul>
              </div>
            </div>

            <div className="language-name p-xs">
              <span>
                {locale_picker_regions
                  ? locale_picker_regions[selectedOption]?.language_name
                  : ""}
              </span>
            </div>

            <div className="copyright">
              <div className="p-xs">
                {" "}
                {changeCurrentYear(subfooter_copyright)}
              </div>
            </div>
          </div>
          <div className="preferences-links">
            <div className="copyright">
              <div className="p-xs">
                {" "}
                {changeCurrentYear(subfooter_copyright)}
              </div>
            </div>
            <ul>
              {bottom_row_links?.length > 0 &&
                bottom_row_links?.map((eachLink) => (
                  <li key={eachLink?.title}>
                    <Link className="p-xs" href={eachLink?.href}>
                      {eachLink?.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Footer;
