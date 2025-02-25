import './Home.css'
function Home(){

    return <>
        <main> 
            <div id="main"> 
                <div className="main-heading">
                    <h1>Gojo Homes</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                </div>
                <hr/>
                <div>
                    <button>Lorem ipsum</button>
                </div>
            </div>
            <div className="img">
                <img src="./sls2.png" alt=""/>
            </div>
        </main>

        <div className='intro-one'>
            <div className='home-elements'>
                <div className='element-heading'>
                    <h1 className='element-title' >We brought every real Estae in one place</h1>                    
                </div>
            <div className='home-cards'>
                <div className='home-png'>
                    <img src="https://picsum.photos/200/300?grayscale" alt="" />
                </div>
                <div className='home-png'>
                    <img src="https://picsum.photos/200/300?grayscale" alt="" />
                </div>                  
            </div>
             
            </div>

            <div className='search'>
                <div  className='element-heading'>
                    <h1>Discover</h1>
                    <p>
                    quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequa
                    </p>                     
                </div>
                <input type="text" />              
            </div>

        </div>
    </>  
}

export default Home