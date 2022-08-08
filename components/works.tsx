import React from "react";
import Image from 'next/image'
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import style from '../styles/works.module.css'
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./work";

const Works = () => (
  <TileWrapper numOfPages={4}>
    <TileBackground
      page={0}
      renderContent={function (props: { progress: number }) {
        throw new Error("Function not implemented.");
      }}
    >
      <WorkBackground />
    </TileBackground>
    <TileContent
      page={0}
      renderContent={function (props: { progress: number }) {
        throw new Error("Function not implemented.");
      }}
    >
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div id="canvas">We brought </div>
              <div
                className={`text-4xl md:text-5xl font-semibold tracking-tight`}
              >
                <WorkLink href="https://statushistory.instructure.com/unt.instructure.com">
                  Canvas
                </WorkLink>{" "}
                Integration
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className={style.imageContainer}>
              <Image 
                className={'image'}
                    src="/assets/works/onlineTest.svg"
                    layout="fill" objectFit="contain"
                  />
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
              <div
                id="lockdown"
                className="text-4xl md:text-5xl font-semibold tracking-tight"
              >
                <WorkLink href="https://status.respondus.com/">
                  Lockdown
                </WorkLink>{" "}
                Integration
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className={style.imageContainer}>
                <Image 
                  className={'image'}
                  src="/assets/works/mobileEncryption.svg"
                  layout="fill" objectFit="contain"
                />
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
              <div
                id="turnitin"
                className="text-4xl md:text-5xl font-semibold tracking-tight"
              >
                <WorkLink href="https://turnitin.statuspage.io/">
                  Turnitin
                </WorkLink>{" "}
                Integration
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className={style.imageContainer}>
                <Image 
                  className={'image'}
                  src="/assets/works/secureFiles.svg"
                  layout="fill" objectFit="contain"
                />
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
              <div id="zoom">And last...</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://status.zoom.us/">Zoom</WorkLink>{" "}
                Integration
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className={style.imageContainer}>
                <Image 
                  className={'image'}
                  src="/assets/works/groupCall.svg"
                  layout="fill" objectFit="contain"
                />
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
