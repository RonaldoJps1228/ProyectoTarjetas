import React from 'react'

const Cards = ({ count }) => {
  return (

<div className="tarjetas">
    <div className="card">
        <div className="box">
            <img src="https://4.bp.blogspot.com/-mQT_lpq-fWI/UQNtBC_LioI/AAAAAAAAfTQ/xFERXQZl41s/s1600/Ferrari+Logo+6.jpg" alt="Ferrari" />
            <header>
                <h2>Ferrari</h2><p>Contador: {count} </p>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, culpa! Suscipit ipsa mollitia non cum minima consectetur consequatur vitae vero, laborum alias? Labore minus deserunt vitae excepturi itaque vero nisi.</p>
            <footer>
                <ul className="actions">
                    <li><a href="https://www.ferrari.com/es-CO" className="button alt">Detalle </a></li>
                </ul>
            </footer>
        </div>
    </div>

    <div className="card">
        <div className="box">
            <img src="http://3.bp.blogspot.com/-kh75oB1u4LY/U4je7smYhXI/AAAAAAAAEaM/-C_A1vX0KGI/s1600/Porsche.jpeg" alt="Porsche" />
            <header>
                <h2>Porsche</h2><p>Contador: {count} </p>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, culpa! Suscipit ipsa mollitia non cum minima consectetur consequatur vitae vero, laborum alias? Labore minus deserunt vitae excepturi itaque vero nisi.</p>
            <footer>
                <ul className="actions">
                    <li><a href="https://shop.porsche.com/us/en-US" className="button alt">Detalle </a></li>
                </ul>
            </footer>
        </div>
    </div>

    <div className="card">
        <div className="box">
            <img src="https://www.carlogos.org/logo/Lamborghini-symbol-640x480.jpg" alt="Lamborghini" />
            <header>
                <h2>Lamborghini</h2><p>Contador: {count} </p>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, culpa! Suscipit ipsa mollitia non cum minima consectetur consequatur vitae vero, laborum alias? Labore minus deserunt vitae excepturi itaque vero nisi.</p>
            <footer>
                <ul className="actions">
                    <li><a href="https://www.lamborghini.com/en-en" className="button alt">Detalle </a></li>
                </ul>
            </footer>
        </div>
    </div>

    <div className="card">
        <div className="box">
            <img src="http://www.superiorwallpapers.com/download/the-bmw-logo-on-a-black-car-with-raindrops-3840x2160.jpg" alt="Bmw" />
            <header>
                <h2>Bmw</h2><p>Contador: {count} </p>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, culpa! Suscipit ipsa mollitia non cum minima consectetur consequatur vitae vero, laborum alias? Labore minus deserunt vitae excepturi itaque vero nisi.</p>
            <footer>
                <ul className="actions">
                    <li><a href="https://www.bmw.com/en/index.html" className="button alt">Detalle </a></li>
                </ul>
            </footer>
        </div>
    </div>

    <div className="card">
        <div className="box">
            <img src="https://wallpapercave.com/wp/wp3747855.jpg" alt="Bugatti" />
            <header>
                <h2>Bugatti</h2><p>Contador: {count} </p>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, culpa! Suscipit ipsa mollitia non cum minima consectetur consequatur vitae vero, laborum alias? Labore minus deserunt vitae excepturi itaque vero nisi.</p>
            <footer>
                <ul className="actions">
                    <li><a href="https://www.bugatti.com/" className="button alt">Detalle </a></li>
                </ul>
            </footer>
        </div>
    </div>

    <div className="card">
        <div className="box">
            <img src="http://3.bp.blogspot.com/-SuJoDdNu-p4/TqPrOZHQvHI/AAAAAAAAeDI/tI9uGkUjv_c/s1600/Mercedes-Benz+Logo10.jpg" alt="Mercedes-Benz" />
            <header>
                <h2>Mercedes-Benz</h2><p>Contador: {count} </p>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, culpa! Suscipit ipsa mollitia non cum minima consectetur consequatur vitae vero, laborum alias? Labore minus deserunt vitae excepturi itaque vero nisi.</p>
            <footer>
                <ul className="actions">
                    <li><a href="https://www.mercedes-benz.com/en/vehicles/" className="button alt">Detalle </a></li>
                </ul>
            </footer>
        </div>
    </div>

</div>

  )
}

export default Cards