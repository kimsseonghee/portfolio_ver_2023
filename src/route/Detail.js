import "../style/Detail.css"
import React from 'react'

function Detail() {
  return (
    <>
    <div className="bg">
    <div className="Projects_detail">
      <div className="detail">
        <div className="info">
          <h2 className="name">CHAT APP.</h2>
          <div className="sk_icon">
            <div className="html"></div>
            <div className="js"></div>
            <div className="css"></div>
            <div className="git"></div>
            <div className="scss"></div>
          </div>
          <div className="btn">
          <p className="React Web"><a href="#">React Web</a></p>
          <p className="React Github"><a href="#">React Github</a></p>
          </div>
        </div>   
        <div className="port"></div>
      </div>
      
      <div className="detail_plus">
      <div className="info_di">
          <h2 className="name_di">CJ ONE.</h2>
          <div className="sk_icon_di">
            <div className="html"></div>
            <div className="js"></div>
            <div className="css"></div>
            <div className="git"></div>
            <div className="scss"></div>
          </div>
          <p className="main"> 
            <strong>
              디바이스의 해상도에 따라 다른 반응형 웹사이트
            </strong>
          </p>
          <p className="sub">
              CSS의 미디어 쿼리로 디바이스의 해상도에 따라 <br/>
              레이아웃이 변경되는 <em>반응형 웹</em> <br/>

              이미지 배열 생성을 통해 <em>GIP Animation</em> <br/>

              JavaScript를 사용해 Nav Bar, Auto Banner등 <br/>
              <em>다양한 인터렉션 구현</em> <br/>
          </p>
          <p className="icon"></p>
          <p className="React Web"><a href="#">React Web</a></p>
          <p className="React Github"><a href="#">React Github</a></p>
      </div>
      <div className="port_di"></div>
      </div>
    </div>
    </div>
    </>
    )
  }
  
  export default Detail;