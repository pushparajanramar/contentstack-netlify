import { Button } from "/components/Elements/Button";
import Link from "next/link";
import parse from "html-react-parser";

const HalfWidthBannerAndText = ({
  headline,
  alignment,
  desktop_image_url,
  tablet_image_url,
  mobile_image_url,
  component_height,
  banner_detail,
  button,
  button_type,
}) => {
  const imageStyles = {
    "--desktop-image-url": `url(${desktop_image_url})`,
    "--mobile-image-url": `url(${mobile_image_url})`,
    "--tablet-image-url": `url(${tablet_image_url})`,
  };
  const componentStyles = {
    "--image-height": `${component_height}px`,
  };
  return (
    <section
      className="half-width-banner-and-text cg-width cg-height"
      style={componentStyles}
    >
      <div className={`w1 ${alignment === "right" ? "right" : ""}`}>
        {button ? (
          <Link
            href={button.href}
            className=" w2 image"
            title={button.title}
            style={imageStyles}
            aria-label={headline}
          ></Link>
        ) : (
          <div className="w2" style={imageStyles}></div>
        )}
        <div className="w2 text">
          <div className="headline">{parse(headline)}</div>
          <div className="banner-description"> {parse(banner_detail)}</div>
          {button?.title && button?.href ? (
            <Button className={`cg-button ${button_type}`}
              label={button?.title}
              url={button.href}
              type={button_type}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};
export default HalfWidthBannerAndText;
