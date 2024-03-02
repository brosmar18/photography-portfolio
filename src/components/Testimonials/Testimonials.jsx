import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What The Clients Say</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
        fermentum augue, sit amet convallis augue. Integer eu iaculis sem.
      </p>
      <div className="reviews">
        <div className="review">
          <div className="img" />
          <div className="text">
            <h3>Eleanor Pena</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Platea id aenean in
              fermentum turpis varius tincidunt eleifend. Turpis tincidunt odio
              aliquam a fringilla et nulla. Lorem cras amet sollicitudin in
              ornare. Malesuada facilisi pretium odio adipiscing tortor purus.
              Pretium suscipit.
            </p>
          </div>
        </div>
        <div className="review">
          <div className="img" />
          <div className="text">
            <h3>Annette Black</h3>
            <p>
              Lorem ipsum dolor sit ametr. Platea id aenean in fermentum turpis
              varius tincidunt eleifend. Turpis tincidunt odio aliquam a
              fringilla et nulla. Lorem cras amet sollicitud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
