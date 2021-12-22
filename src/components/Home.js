import React from 'react'
import styled from 'styled-components'
import { render } from 'react-dom'
import { VideoScroll } from 'react-video-scroll'

const setStyles = (wrapperEl, videoEl, playbackRate) => {
    wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
      playbackRate +
      'px'})`
    wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
      playbackRate +
      'px'})`
    }  

function Home() {
    return (
        <Container>
                <VideoScroll
      onLoad={props =>
        setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
      }
      playbackRate={15}
      style={{ position: 'sticky' }}
    >
      <video
        tabIndex="0"
        autobuffer="autobuffer"
        preload="preload"
        style={{ width: '100%', objectFit: 'contain', height: '100vh' }}
        playsInline
      >
        <source type="video/mp4" src="/Videos/hero_mn.mp4" />
      </video>
    </VideoScroll>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;

`

export default Home
