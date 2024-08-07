import { Button } from "/components/Elements/Button";
import {
  bpTablet,
  bpDesktop,
} from "../../../styles/global/breakpoints.module.scss";
import Link from "next/link";
function sliderValue(dataProp) {
  if (
    Array.isArray(dataProp) &&
    typeof dataProp[0] === "object" &&
    "value" in dataProp[0]
  ) {
    return dataProp[0].value;
  } else if (typeof dataProp === "number") {
    return dataProp;
  }

  return 0; // Default return value
}

const FullWidthBanner = ({ ...props }) => {
  const {
    heading,
    paragraph,
    button,
    position,
    variation,
    text_color,
    vertical_offset,
    horizontal_offset,
    floating_box_height,
    button_variants,
    banner_tablet_image_url,
    banner_desktop_image_url,
    banner_smartphone_image_url,
    block_background_color,
    transparency,
    text_alignment,
  } = props ?? {};
  const styleContainer = {
    "--text-color": text_color,
    "--bg-color": `var(--${block_background_color})`,
    "--vertical-offset": sliderValue(vertical_offset),
    "--horizontal-offset": sliderValue(horizontal_offset),
    "--transparency": sliderValue(transparency),
    "--floating_box_height": sliderValue(floating_box_height),
  };
  return (
    <>
      <div
        style={styleContainer}
        className={`full-width-banner cg-height ${
          variation ? variation : null
        } ${position ? position : null}
        ${transparency !== 100 ? "opacity" : ""}
        ${vertical_offset !== 0 || horizontal_offset !== 0 ? "offset" : ""}
        `}
      >
        <div className="w1">
          <div className={`w3 ${text_alignment ? text_alignment : ""}`}>
            <h1>{heading}</h1>
            <p> {paragraph} </p>
            <div className="w4">
              {button &&
                button?.map((btn, index) => {
                  console.log("btn?.title", btn?.title);
                  return (
                    <>
                      {btn?.title && (
                        <Button
                          key={index}
                          href={btn?.href}
                          label={btn?.title}
                          type={button_variants}
                        ></Button>
                      )}
                    </>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="w2">
          {button && button[0] && button[0]?.href ? (
            <Link href={`${button[0]?.href}`}>
              <picture>
                <source
                  alt=""
                  media={`(min-width:${bpDesktop})`}
                  srcSet={`${banner_desktop_image_url?.url}`}
                />
                <source
                  alt=""
                  media={`(min-width:${bpTablet})`}
                  srcSet={`${banner_tablet_image_url?.url}`}
                />
                <img src={`${banner_smartphone_image_url?.url}`} alt="" />
              </picture>
            </Link>
          ) : (
            <picture>
              <source
                alt=""
                media={`(min-width:${bpTablet})`}
                srcSet={`${banner_tablet_image_url?.href}`}
              />
              <source
                alt=""
                media={`(min-width:${bpDesktop})`}
                srcSet={`${banner_desktop_image_url?.href}`}
              />
              <img src={`${banner_smartphone_image_url?.href}`} alt="" />
            </picture>
          )}
        </div>
      </div>
    </>
  );
};

export default FullWidthBanner;
