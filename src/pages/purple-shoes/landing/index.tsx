import "./css/landingStyles.css";

const Landing = () => {
  return (
    <div className="container">
      <div className="main">
        <a href="https://smartstore.naver.com/purpleshoes?NaPm=ct%3Dkvdwpqn9%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3Dcf711f2c70daf3e5a3ec45a2936adf81c75f05c2">
          <img className="btn1" src="./images/buttons/btn1.png" />
        </a>
        <a href="userservice.html">
          <img className="btn2" src="./images/buttons/btn2.png" />
        </a>
        <a href="managerservice.html">
          <img className="btn3" src="./images/buttons/btn3.png" />
        </a>
        <a href="brandstory.html">
          <img className="btn4" src="./images/buttons/btn4.png" />
        </a>
      </div>
    </div>
  );
};

export default Landing;
