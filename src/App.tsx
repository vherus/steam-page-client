import "./App.css";
import PageTitle from "./components/PageTitle";
import StoreNav from "./components/StoreNav";
import gryphon from "./assets/gryphon.jpg";
import dd2 from "./assets/dd2.jpg";
import { ChangeEvent, useState } from "react";

const images = [
  gryphon,
  gryphon,
  gryphon,
  gryphon,
  gryphon,
  gryphon,
  gryphon,
  gryphon,
  gryphon,
  gryphon,
];

const perPage = 5;

function App() {
  const [offset, setOffset] = useState(0);
  const totalImageWidth = 116 + 2;
  const totalWidth = totalImageWidth * images.length;
  const topOffset = totalWidth - (perPage + 1) * totalImageWidth;
  const onScroll = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOffset(((Number(value) * topOffset) / 100) * -1);
  };

  return (
    <div className="container">
      <main>
        <StoreNav />

        <PageTitle />

        <article className="game-highlights">
          <section className="left-col">
            <div className="highlight">
              <img src={gryphon} />
            </div>
            <div className="highlight-strip-container">
              <div className="highlight-strip" style={{ left: offset }}>
                {images.map((image, index) => (
                  <div
                    key={`highlight-${index}`}
                    className="highlight-strip-element"
                  >
                    <img src={image} />
                  </div>
                ))}
              </div>
            </div>
            <div className="highlight-slider">
              <div className="btn btn-left"></div>
              <input
                type="range"
                className="highlight-slider-track"
                onChange={(e) => onScroll(e)}
                defaultValue={offset}
              />
              <div className="btn btn-right"></div>
            </div>
            <div></div>
          </section>
          <section className="right-col">
            <div className="game-image">
              <img src={dd2} />
            </div>
            <div className="game-description">
              Dragon’s Dogma 2 is a single player, narrative driven action-RPG
              that challenges the players to choose their own experience – from
              the appearance of their Arisen, their vocation, their party, how
              to approach different situations and more - in a truly immersive
              fantasy world.
            </div>
            <div className="glance">
              <div className="subtitle">
                <div>ALL REVIEWS:</div>
                <div>RELEASE DATE:</div>
                <div>DEVELOPER:</div>
                <div>PUBLISHER:</div>
              </div>
              <div className="summary">
                <div>Mixed</div>
                <div>22 Mar, 2024</div>
                <div>
                  <a href="#">CAPCOM Co., Ltd.</a>
                </div>
                <div>
                  <a href="#">CAPCOM Co., Ltd.</a>
                </div>
              </div>
            </div>
            <div></div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
