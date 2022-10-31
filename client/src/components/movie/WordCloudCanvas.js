import { useEffect } from 'react';
import { useRef } from 'react';
import Wordcloud from 'wordcloud';

function WordCloudCanvas({ wordCloud }) {
  const words = [];
  for (const word of wordCloud) {
    if (word['word'] === '영화') {
      continue;
    }
    words.push([word['word'], word['value']]);
  }

  const canvasRef = useRef(null);

  useEffect(() => {
    Wordcloud(canvasRef.current, {
      list: words,
      shape: 'circle',
      minRotation: 20,
      maxRotation: 90,
      shrinkToFit: true,
      minSize: 2,
      weightFactor: 5,
    });
  }, [words]);

  return (
    <canvas
      width="1920"
      height="1080"
      style={{ width: '100%', height: '100%' }}
      ref={canvasRef}
    />
  );
}
export default WordCloudCanvas;
