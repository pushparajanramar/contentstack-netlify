"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../Elements/Button";

const LandscapeCard = ({ ...props }) => {
  const { columns, card, image_heights, wraps = false } = props ?? {};
  const styleContainer = {
    "--column-count": columns,
    "--wrap-cards": wraps ? "wrap" : "nowrap",
    "--image-heights": image_heights ? image_heights + "px" : "",
    "max-width": "97%",
    "margin":"0 auto",
  };

  return (
    <div
      className={`landscape-card cg-widths cg-height ${
        columns == 2 ? "two-column" : columns == 3 ? "three-column" : ""
      } ${wraps == true ? "wrap" : "nowrap"}`}
      style={styleContainer}
    >
      <div className="w1 cg-widths">
        {card?.length > 0 &&
          card?.map((each, index) => {
            return (
              <div className={`${"category"}`} key={index}>
                {each?.cta?.length > 0 ? (
                  <>
                    <Link
                      className={`${"w2"} ${wraps ? "" : "nowrap"}`}
                      href={each?.cta[0]?.href}
                      aria-label={each?.title}
                    >
                      <Image
                        alt=""
                        width={100}
                        height={100}
                        src={each?.image_url?.url}
                        loader={() => each?.image_url?.url}
                        unoptimized={true}
                      />
                    </Link>
                  </>
                ) : (
                  <div className={`${"w2"} ${wraps ? "" : "nowrap"}`}>
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={each?.image_url?.url}
                      loader={() => each?.image_url?.url}
                      unoptimized={true}
                    />
                  </div>
                )}
                <div className={"w3"}>
                  <div className={"w4"}>
                    <h3>{each?.title}</h3>
                    <p>{each?.description}</p>
                  </div>

                  <div className={"w5"}>
                    {each?.cta?.length > 0 &&
                      each?.cta?.map((eachCta, btnIdx) => {
                        return (
                          <Button
                            key={`btn_${btnIdx}`}
                            href={eachCta.href}
                            type="cta-black"
                            label={eachCta?.title}
                          />
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default LandscapeCard;
