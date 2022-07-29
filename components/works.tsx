import dateFormat from "dateformat";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./work";

const Works = params => (
  <TileWrapper numOfPages={4}>
    <TileBackground page={0} renderContent={function (props: { progress: number; }) {
      throw new Error("Function not implemented.");
    } }>
      <WorkBackground />
    </TileBackground>
    <TileContent page={0} renderContent={function (props: { progress: number; }) {
      throw new Error("Function not implemented.");
    } }>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div id='canvas'>We brought </div>
              <div className={`text-4xl md:text-5xl font-semibold tracking-tight`}>
                <WorkLink href="https://statushistory.instructure.com/unt.instructure.com">
                  Canvas
                </WorkLink>{" "}
                Integration
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="text-black text-3xl">
                <div className="text-2xl md:text-3xl w-full max-w-md pt-10 lg:pt-0 px-0 md:px-0">
                  <div className="flex flex-1 justify-center mb-[40px] pb-10 h-[100px]">
                    <h2>status</h2>
                  </div>
                  <p>Status: {params.data.canvas.canvasDescription}</p>
                  {dateFormat(params.data.canvas.canvasStatus, "dddd, mmmm dS, yyyy")}
                </div>
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div id='lockdown' className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://status.respondus.com/">
                  Lockdown
                </WorkLink>{" "}
                Integration
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="text-black text-3xl">
                <div className="text-2xl md:text-3xl w-full max-w-md pt-10 lg:pt-0 px-0 md:px-0">
                    <div className="flex flex-1 justify-center mb-[40px] pb-10 h-[100px]">
                      <h2>status</h2>
                    </div>
                    <p>Status: {params.data.respondus.respondusDescription}</p>
                    {dateFormat(params.data.respondus.respondusStatus, "dddd, mmmm dS, yyyy")}
                </div>
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div id='turnitin' className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://turnitin.statuspage.io/">
                  Turnitin
                </WorkLink>{" "}
                Integration
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="text-black text-3xl">
                <div className="text-2xl md:text-3xl w-full max-w-md pt-10 lg:pt-0 px-0 md:px-0">
                      <div className="flex flex-1 justify-center mb-[40px] pb-10 h-[100px]">
                        <h2>status</h2>
                      </div>
                      <p>Status: {params.data.turnitin.turnitinDescription}</p>
                      {dateFormat(params.data.turnitin.turnitinStatus, "dddd, mmmm dS, yyyy")}
                  </div>
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={3}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div id='zoom'>And last...</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://status.zoom.us/">Zoom</WorkLink>{" "}
                Integration
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="text-black text-3xl">
                <div className="text-2xl md:text-3xl w-full max-w-md pt-10 lg:pt-0 px-0 md:px-0">
                        <div className="flex flex-1 justify-center mb-[40px] pb-10 h-[100px]">
                          <h2>status</h2>
                        </div>
                        <p>Status: {params.data.zoom.zoomDescription}</p>
                        {dateFormat(params.data.zoom.zoomStatus, "dddd, mmmm dS, yyyy")}
                </div>
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>

);

export default Works;
