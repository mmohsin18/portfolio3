"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React from "react";
import { getVids } from "./sanity/sanity-utils";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./TrendingSlider.css";

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  export default async function TrendingSlider() {
    const docvids = await getVids();
      return (
    <>
      <div className="trending">
        <div className="container">
          <div className="title-btns">
            <h3></h3>
            <div className="btns">
              <button title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className="row-container" id="slider">
          {docvids.map((doc) => (
              <div key={doc.id} className="row-item">
                <Link href={`/`} className="link">
                  <div className="item-header">
                    <img src={doc.image} alt="product" />
                  </div>
                  <div className="item-description">
                    <p>{doc.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
    )
  };
