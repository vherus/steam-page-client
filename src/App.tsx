import './App.css'
import PageTitle from './components/PageTitle'
import StoreNav from './components/StoreNav'
import gryphon from './assets/gryphon.jpg'
import dd2 from './assets/dd2.jpg'

function App() {
  return (
    <div className="container">
      <main>
        <StoreNav />

        <PageTitle />

        <article className='game-highlights'>
          <section className='left-col'>
            <div className='highlight'>
              <img src={gryphon} />
            </div>
            <div className='highlight-strip'>
              <div className='highlight-strip-element'>
                <img src={gryphon} />
              </div>
              <div className='highlight-strip-element'>
                <img src={gryphon} />
              </div>
              <div className='highlight-strip-element'>
                <img src={gryphon} />
              </div>
              <div className='highlight-strip-element'>
                <img src={gryphon} />
              </div>
              <div className='highlight-strip-element'>
                <img src={gryphon} />
              </div>
              <div className='highlight-strip-element'>
                <img src={gryphon} />
              </div>
              <div className='highlight-strip-element'>
                <img src={gryphon} />
              </div>
              <div className='highlight-strip-element'>
                <img src={gryphon} />
              </div>
              <div className='highlight-strip-element'>
                <img src={gryphon} />
              </div>
            </div>
            <div></div>
          </section>
          <section className='right-col'>
            <div className='game-image'>
              <img src={dd2}/>
            </div>
            <div className='game-description'>
              Dragon’s Dogma 2 is a single player, narrative driven action-RPG that challenges the players to choose their own experience – from the appearance of their Arisen, their vocation, their party, how to approach different situations and more - in a truly immersive fantasy world. 
            </div>
            <div className='glance'>
              <div className='subtitle'>
                <div>ALL REVIEWS:</div>
                <div>RELEASE DATE:</div>
                <div>DEVELOPER:</div>
                <div>PUBLISHER:</div>
              </div>
              <div className='summary'>
                <div>Mixed</div>
                <div>22 Mar, 2024</div>
                <div><a href="#">CAPCOM Co., Ltd.</a></div>
                <div><a href="#">CAPCOM Co., Ltd.</a></div>
              </div>
            </div>
            <div></div>
          </section>
        </article>

      </main>
    </div>
  )
}

export default App
