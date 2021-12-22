import './App.css';
import Body from './components/Body';
import { render } from 'react-dom'
import { VideoScroll } from 'react-video-scroll'


const setStyles = (wrapperEl, videoEl, playbackRate) => {
  wrapperEl.style.marginTop = `calc(0% - ${Math.floor(videoEl.duration) * 0.5 *
    playbackRate +
    'px'})`
  wrapperEl.style.marginBottom = `calc(0% - ${Math.floor(videoEl.duration) *
    playbackRate +
    'px'})`
  } 


function App() {
  return (
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
        style={{ width: '100%', objectFit: 'contain' }}
        playsInline
      >
        <source type="video/mp4" src="./Videos/hero_mn.mp4" />
      </video>

      <Body />
    </VideoScroll>
  );
}

render(<App />, document.getElementById('root'))

export default App;
