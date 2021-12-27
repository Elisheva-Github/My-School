// import React from 'react';
// import YouTube from 'react-youtube';
// import ReactPlayer from 'react-player/lazy'

// class ResponsivePlayer extends React.Component {
//   render() {
//     const opts = {
//       height: '390',
//       width: '640',
//       playerVars: {
//         // https://developers.google.com/youtube/player_parameters
//         autoplay: 1,
//       },
//     };
//     // render () {
//     //   return (
//     //     <div className='player-wrapper'>
//     //       <ReactPlayer
//     //         className='react-player'
//     //         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
//     //         width='100%'
//     //         height='100%'
//     //       />
//     //     </div>
//     //   )
//     // }
//     //   const opts = new window['YT'].Player('player', {
//     //     width: '100%',
//     //     playerVars: {
//     //       'autoplay': 1,
//     //       'controls': 0,
//     //       'autohide': 1,
//     //       'wmode': 'opaque',
//     //       'origin': 'http://localhost:8100'
//     //     },

//     //   });

//     return <YouTube videoId={ysz5S6PUM} opts={opts} onReady={this._onReady} />;
//   }

//   _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }
//   //   elementRef.addEventListener("touchstart", handler, passiveEvent);
//   //   document.addEventListener("wheel", function(e) {
//   //     e.preventDefault(); // does nothing since the listener is passive
//   //  }, {
//   //     passive: true
//   //  });
//   //}
// };
// export default YouTube;
// //export default ReactPlayer;