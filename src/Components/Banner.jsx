import { useEffect, useState } from "react";
import {Container, Row ,Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "./Banner.css";
export const Banner=()=>{
    const [loopNum, setLoopNum]=useState(0);
    const [isDelete,SetisDelete]=useState(0);
    const toRotate=["MERN Stack Developer","AI Anthusiastic"];
    const [text,setText]=useState('');
    const [delta,setDelta]=useState(300-Math.random()*100);
    const [animationDirection, setAnimationDirection] = useState('left-to-right');
    const period=2000;

    useEffect(()=>{
    let ticker=setInterval(()=>{
        tick();
    },delta)
    return ()=>{clearInterval(ticker)};
    },[text]);

    useEffect(() => {
        setAnimationDirection('left-to-right');
    
        return () => setAnimationDirection('');
      }, []);

    const tick=()=>{
        let i=loopNum%toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDelete? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);

        setText(updatedText);

        if(isDelete){
            setDelta(preDelta=>preDelta/2)
        }
        if(!isDelete && updatedText === fullText){
            SetisDelete(true);
            setDelta(period);
        }else if(isDelete && updatedText===''){
            SetisDelete(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    const scrollToContact = () => {
        const contactSection = document.getElementById("Contact");
    
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      };
    return (
        <section className="banner" id="home">
            <Container>
                <Row className={`align-items-center banner-row ${animationDirection}`}>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Hello, I'm a Jitendra Verma,</h1>
                        <h1>{`I'm a `} <span className="wrap">{text}</span></h1>
                        <p>Salutations! I'm a committed MERN Stack Developer that has a passion for creating creative solutions and a knack for Java with DSA. passionate about AI and Data Science constantly seeking for new opportunities.</p>
                        <button onClick={scrollToContact}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="headeer img" />
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}