
import '../pages/NosotrosPage.css';

  const NosotrosPage = (props) => {
    return (
      <main className="holder">
        <div className="nosotros">
          <h2>Mariela</h2>
          <img
            src="images/nosotros/maru.jpg"
            width="150"
            height="150"
            class="ppal"
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem est sed voluptas beatae sint dolor magni modi adipisci,
            vel nulla quidem quos, odio cumque dolorem non dolores provident
            molestias? Fugit!
          </p>
        </div>
        <div className="nosotros">
          <h2>Anabel</h2>
          <img src="images/nosotros/ana.jpg" width="150" height="150" class="ppal" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione autem
            perspiciatis optio, a quisquam cum consequatur minus id! Ratione,
            porro sunt rem optio deleniti nostrum rerum minus ipsam culpa
            molestiae!
          </p>
        </div>
      </main>
    );
  };
  
  export default NosotrosPage;
  
