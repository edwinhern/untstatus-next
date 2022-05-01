import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./work";

const Works = () => (
  <TileWrapper numOfPages={4}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We brought </div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://statushistory.instructure.com/unt.instructure.com">
                  Canvas
                </WorkLink>{" "}
                Integration
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="text-black text-3xl">Put Canvas Data Here!</div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://status.respondus.com/">
                  Lockdown
                </WorkLink>{" "}
                Integration
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="text-black text-3xl">Put Lockdown Data Here!</div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://turnitin.statuspage.io/">
                  Turnitin
                </WorkLink>{" "}
                Integration
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="text-black text-3xl">Put Turnitin Data Here!</div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={3}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>And last...</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://status.zoom.us/">Zoom</WorkLink>{" "}
                Integration
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="text-black text-3xl">Put Zoom Data Here!</div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
