import React from 'react'
import Webcam from 'react-webcam'
import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    overflow: hidden;
  }
`;

const Container = styled.div`
  padding: 1.5rem;
  padding-bottom: 30rem;
  max-width: 28rem;
  margin: 0 auto;
  background-color: #008C0E;
`;

const Title = styled.p`
  text-align: center;
  font-size: 25px;
  color: white;
  -webkit-text-stroke: 0.8px white;
  margin-top: 80px;
  margin-bottom: 45px;
`
const Camerabox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CameraWrapper = styled.div`
  margin-top: 5%; 
  margin-bottom: 30%;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 4px double white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledWebcam = styled(Webcam)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


const SubTitle = styled.div`
  margin-top: 192px;
  margin-bottom: -60px;  
  text-align: center;
  font-size: 1.2rem;
  color: white;
  -webkit-text-stroke: 0.8px white;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Button = styled.div`
  display: flex;
  width: 350px;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-top:100px;
  border-radius: 10px;
  border: 2px solid #FFF;
  background: #FFF;
  color: black;
  -webkit-text-stroke: 0.4px black;

`

export default function Face() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>얼굴 인식 중</Title>
        <Camerabox>
          <CameraWrapper>
            <StyledWebcam
              audio={false}
              mirrored={true}
              screenshotFormat="image/jpeg"
              videoConstraints={{
                facingMode: "user",
              }}
            />
          </CameraWrapper>
        </Camerabox>
        <SubTitle>정면을 바라보고<br />인식을 기다려 주세요!</SubTitle>
        <Wrapper>
          <Button>취소</Button>
        </Wrapper>
      </Container>
    </>
  )
}
