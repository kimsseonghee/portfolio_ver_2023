import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Index.css"

function Index() {
  const [size, setSize] = useState(300);
  const [location, setLocation] = useState({ pathname: "/project" });

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const circleHeight = size / 2;

    if (scrollPosition > circleHeight && scrollPosition < windowHeight - circleHeight) {
      const newCircleSize = Math.max(300, (scrollPosition - circleHeight) * 0.9 + size);
      setSize(newCircleSize);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const handleCircleClick = () => {
    if (size >= 700) {
      setLocation({ pathname: "/project" });
    } 
  };
  
  return (
    <>
    <div className="bg">

    <div className="bg_img">
      
    <div className="content1">
        <div className="menu">
          Contact &nbsp; &nbsp;
          Projects &nbsp; &nbsp;
          menu &nbsp; &nbsp;
        </div>
        <div className="portfolio">portfolio</div>
        <Link to={location.pathname}>
              <p className="circle" style={{ width: size, height: size }} onClick={handleCircleClick}>
                {size >= 400 ? 'GO TO PROJECT' : null}
              </p>
        </Link>
        <p className="word">
          <div className="w"></div>
          <div className="o"></div>
          <div className="r"></div>
          <div className="k"></div>
        </p>
    </div>

    <div className="content3">
    <p className="get">Get In Touch</p>
    <div className="line"></div>
      <div className="text">
        Let’s make<br/>
        great work<br/>
        together<br/>
      </div>
      <div className="st"></div>
      <p className="menual">
        {/* CJ ONE / NETFLIX / KOSDAQ<br/> 
        SAMSUNG ELECTROl / CHAT APP */}
      </p>
    </div>

    <div className="content2">
        <p className="explanation">HELLO,<br/><strong></strong>  I’M SEONG HEE</p>
        <div className="con">
          <div className="about">About me!</div>
          <p className="me">
            임시 내용입니다. 임시 내용입니다. 임시 내용입니다. 임시 내용입니다. <br/>
            임시 내용입니다. 임시 내용입니다. 임시 내용입니다. 임시 내용 <br/>
            임시 내용입니다. 임시 내용입니다. 임시 내용입니다. 임시 내용입니다. <br/>
            임시 내용입니다. 임시 내용입니다. 임시 내용입니다. 임시 내용 <br/>
            <a href="#">이력서로 이동</a> <br/>
          </p>
          <div className="di_icon">
            <div className="Illustrator"></div>
            <div className="InDesign"></div>
            <div className="Photoshop"></div>
            <div className="Figma"></div>
            <div className="Premiere"></div>
          </div>

          <div className="sk_icon">
            <div className="html"></div>
            <div className="js"></div>
            <div className="css"></div>
            <div className="git"></div>
            <div className="scss"></div>
          </div>
        </div>
    </div>

    </div>
    </div>
    </>
  );
}

export default Index;
