import React from "react";
import Navbar from "../components/navbar";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import dateFormat from "dateformat";
import customCss from "../lib/cssFunction";
import Animation from "../components/animation";
import { WorkLink } from "../components/work";
import {
  MainContainer1,
  WorkContainer1,
  WorkLeft1,
  WorkRight1,
  WorkAnimation1,
} from "../components/status";

const canvasPage = (props) => {
  return (
    <MainContainer1>
      <Navbar />
      <Head>
        <title>Canvas Status</title>
        <meta name="description" content="Made for the people, UNT." />
        <link rel="icon" href="/assets/logos/logo-100.svg" />
      </Head>
      <WorkContainer1>
        <WorkLeft1>
            <WorkLink href="https://statushistory.instructure.com/unt.instructure.com">
              Canvas
            </WorkLink>{" "}
            Integration
        </WorkLeft1>
        <WorkRight1>
          <WorkAnimation1>
            <Animation />
          </WorkAnimation1>
          <p>Status: {props.canvasDescription}</p>
          {dateFormat(props.canvasStatus, "dddd, mmmm dS, yyyy")}
        </WorkRight1>
      </WorkContainer1>
    </MainContainer1>
  );
};

// Use when calling hhtp request inside a page Ex: canvas.tsx
export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  try {
    let res = await fetch(`https://status.instructure.com/api/v2/status.json`);
    let data = await res.json();
    return {
      props: {
        canvasStatus: data["page"].updated_at,
        canvasIndicator: customCss(data.status["indicator"]),
        canvasDescription: data.status["description"],
      },
    };
  } catch (err) {
    console.error(err);
  }
}

export default canvasPage;
