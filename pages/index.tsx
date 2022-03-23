import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

import { setTimeout } from "timers/promises";
interface ITime {
  hours: number;
  minutes: number;
}
const Home = () => {
  const [time, setTime] = useState<ITime>();
  const buttonWidth = "2px";
  const volumeButtonHeight = "50px";
  const today = new Date();
  const hours = today.getHours();
  const minutes = `0${today.getMinutes().toString()}`;
  const testArray = [1, 2, 3, 4, 5];
  // useEffect(() => {
  //   setTimeout(() => {
  //     const now = new Date();
  //     setTime({ hours: now.getHours(), minutes: now.getMinutes() });
  //   }, 60000);

  //   return () => {};
  // }, []);

  return (
    <>
      <div style={{ padding: "20px" }}>
        <Head>
          <title>Instagram</title>
        </Head>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="leftSide"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              className="blank1"
              style={{ width: buttonWidth, height: "75px" }}
            ></div>
            <div
              className="soundOnOff"
              style={{
                width: buttonWidth,
                height: "20px",
                background: "black",
              }}
            ></div>
            <div
              className="blank2"
              style={{ width: buttonWidth, height: "25px" }}
            ></div>
            <div
              className="volumeUp"
              style={{
                width: buttonWidth,
                height: volumeButtonHeight,
                background: "black",
              }}
            ></div>
            <div
              className="blank3"
              style={{ width: buttonWidth, height: "20px" }}
            ></div>
            <div
              className="volumeDown"
              style={{
                width: buttonWidth,
                height: volumeButtonHeight,
                background: "black",
              }}
            ></div>
          </div>

          <div
            className="iphone"
            style={{
              width: "270px",
              height: "585px",
              borderRadius: "40px",
              border: "10px solid black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              className="iphoneHeader"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "end",
              }}
            >
              <div
                className="time"
                style={{
                  fontSize: "12px",
                  width: "70px",
                  textAlign: "center",
                }}
              >
                {`${hours}:${minutes.slice(-2)}`}
              </div>
              <div
                className="notch"
                style={{
                  background: "black",
                  width: "120px",
                  height: "25px",
                  borderRadius: "0 0 15px 15px",
                }}
              ></div>
              <div
                className="status"
                style={{
                  width: "70px",
                }}
              >
                <div
                  className="statusImageWrapper"
                  style={{
                    width: "60px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <img src="/stats.png" width={15} height={10} alt="stats" />
                  <img
                    src="/wifi-icon.png"
                    width={13}
                    height={10}
                    alt="wifi-icon"
                  />
                  <img
                    src="/battery.png"
                    width={22}
                    height={10}
                    alt="battery"
                  />
                </div>
              </div>
            </div>
            <div className="iphoneContent" style={{ height: "100%" }}>
              <div
                className="appContainer"
                style={{
                  paddingTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "520px",
                }}
              >
                <div
                  className="appHeader"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 12px",
                    paddingBottom: "8px",
                    borderBottom: "1px solid lightgray",
                  }}
                >
                  <div
                    className="appLeftSide"
                    // style={{ display: "flex", alignItems: "center" }}
                  >
                    <div
                      className="logoAndArrow"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src="/letter-logo.png"
                        width={88}
                        height={24}
                        alt="letter-logo"
                      />
                      <img
                        src="/down-arrow.png"
                        width={7}
                        height={5}
                        alt="down-arrow"
                      />
                    </div>
                  </div>
                  <div
                    className="appRightSide"
                    style={{
                      width: "75px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/plus-button.png"
                      width={16}
                      height={16}
                      alt="plus-button"
                    />
                    <svg
                      aria-label="댓글 달기"
                      color="#262626"
                      fill="#262626"
                      height="18"
                      role="img"
                      viewBox="0 0 24 24"
                      width="18"
                    >
                      <path
                        d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <svg
                      aria-label="게시물 공유"
                      color="#262626"
                      fill="#262626"
                      height="18"
                      role="img"
                      viewBox="0 0 24 24"
                      width="18"
                    >
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="22"
                        x2="9.218"
                        y1="3"
                        y2="10.083"
                      ></line>
                      <polygon
                        fill="none"
                        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></polygon>
                    </svg>
                  </div>
                </div>
                <div
                  className="appBody"
                  style={{
                    height: "100%",
                    overflow: "scroll",
                  }}
                >
                  {testArray.map((item) => {
                    return (
                      <div key={item} className="post">
                        <div
                          className="postHeader"
                          style={{
                            padding: "8px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div
                            className="postLeftSide"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div
                              className="profilePhoto"
                              style={{
                                width: "20px",
                                height: "20px",
                                background: `rgb(95,73,149)`,
                                marginRight: "8px",
                                borderRadius: "50%",
                              }}
                            ></div>
                            <div className="idAndLocation">
                              <div
                                className="id"
                                style={{
                                  fontSize: "10px",
                                  fontWeight: "bolder",
                                }}
                              >
                                fankimm
                              </div>
                              <div
                                className="location"
                                style={{
                                  fontSize: "10px",
                                  fontWeight: "lighter",
                                }}
                              >
                                강남구 테헤란로 501
                              </div>
                            </div>
                          </div>
                          <div className="postRightSide">
                            <svg
                              aria-label="옵션 더 보기"
                              color="#262626"
                              fill="#262626"
                              height="12"
                              role="img"
                              viewBox="0 0 24 24"
                              width="12"
                            >
                              <circle cx="12" cy="12" r="1.5"></circle>
                              <circle cx="6" cy="12" r="1.5"></circle>
                              <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                          </div>
                        </div>
                        <div
                          className="postPhoto"
                          style={{
                            width: "100%",
                            height: "280px",
                            background: `rgb(${95 * item},${79 + item * 5},${
                              149 - item * 20
                            })`,
                          }}
                        ></div>
                        <div
                          className="postButtons"
                          style={{
                            padding: "8px 8px",
                            fontSize: "12px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div
                            className="postButtons-left"
                            style={{
                              width: "75px",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <svg
                              aria-label="좋아요"
                              color="#262626"
                              fill="#262626"
                              height="18"
                              role="img"
                              viewBox="0 0 24 24"
                              width="18"
                            >
                              <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                            </svg>
                            <svg
                              aria-label="댓글 달기"
                              color="#262626"
                              fill="#262626"
                              height="18"
                              role="img"
                              viewBox="0 0 24 24"
                              width="18"
                            >
                              <path
                                d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              ></path>
                            </svg>
                            <svg
                              aria-label="게시물 공유"
                              color="#262626"
                              fill="#262626"
                              height="18"
                              role="img"
                              viewBox="0 0 24 24"
                              width="18"
                            >
                              <line
                                fill="none"
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                x1="22"
                                x2="9.218"
                                y1="3"
                                y2="10.083"
                              ></line>
                              <polygon
                                fill="none"
                                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              ></polygon>
                            </svg>
                          </div>
                          {/* <div
                        className="postButtons-middle"
                        style={{
                          width: "320px",
                        }}
                      >
                        .....
                      </div> */}
                          <svg
                            aria-label="저장"
                            color="#262626"
                            fill="#262626"
                            height="18"
                            role="img"
                            viewBox="0 0 24 24"
                            width="18"
                          >
                            <polygon
                              fill="none"
                              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            ></polygon>
                          </svg>
                        </div>
                        <div className="postFooter">
                          <div
                            className="postBody"
                            style={{
                              fontSize: "10px",
                              padding: "4px 8px",
                              display: "flex",
                            }}
                          >
                            <div
                              className="postBody-id"
                              style={{ marginRight: "5px", fontWeight: "bold" }}
                            >
                              fankimm
                            </div>
                            <div
                              className="postBody-content"
                              style={{ marginRight: "5px" }}
                            >
                              react html css typescript...
                            </div>
                            <div
                              className="postBody-more-button"
                              style={{ color: "gray" }}
                            >
                              더 보기
                            </div>
                          </div>
                          <div
                            className="reply"
                            style={{
                              fontSize: "12px",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "4px 8px",
                            }}
                          >
                            <div className="reply-left">
                              <div
                                className="prifleAndPlaceholder"
                                style={{
                                  marginBottom: "8px",
                                  width: "70px",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src="/myProfile.jpg"
                                  width={18}
                                  height={18}
                                  alt="myProfile"
                                  style={{ borderRadius: "50%" }}
                                />
                                <div
                                  className="reply-placeholder"
                                  style={{ color: "gray", fontSize: "10px" }}
                                >
                                  댓글 달기...
                                </div>
                              </div>
                              <div style={{ fontSize: "8px", color: "gray" }}>
                                1시간 전
                              </div>
                            </div>
                            <div className="reply-right">
                              <div
                                className="reply-emojis"
                                style={{
                                  width: "62px",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <div>❤️</div>
                                <div>🙌</div>
                                <div>⊕</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  className="appFooter"
                  style={{
                    height: "25px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "12px",
                    padding: "4px 15px",
                    borderTop: "1px solid lightgrey",
                  }}
                >
                  <svg
                    aria-label="홈"
                    color="#262626"
                    fill="#262626"
                    height="18"
                    role="img"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path>
                  </svg>
                  <img src="/glass.png" width={18} height={18} alt="glass" />
                  <img src="/reels.png" width={18} height={18} alt="reels" />
                  <img src="/store.png" width={18} height={18} alt="store" />

                  <img
                    src="/myProfile.jpg"
                    width={18}
                    height={18}
                    alt="myProfile"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
            </div>
            <div
              className="iphoneFooter"
              style={{
                padding: "4px",
                height: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
              }}
            >
              <div
                className="homeBar"
                style={{
                  width: "108px",
                  height: "4px",
                  margin: "auto",
                  background: "black",
                  borderRadius: "4px",
                }}
              ></div>
            </div>
          </div>
          <div className="rightSide">
            <div className="rightSideBlank1" style={{ height: "150px" }}></div>
            <div
              className="sideButton"
              style={{
                width: buttonWidth,
                height: "75px",
                background: "black",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div
          className="copyright"
          style={{
            textAlign: "center",
            fontSize: "10px",
            padding: "10px",
            color: "gray",
            marginTop: "10px",
          }}
        >
          Copyright © 2022 Jihwan Kim.
        </div>
        <div
          className="footerImageWrapper"
          style={{
            width: "60px",
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-youtube"
            viewBox="0 0 16 16"
          >
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Home;
