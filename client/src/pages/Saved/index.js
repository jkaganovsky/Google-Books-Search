import React from "react";
import Media from "react-bootstrap/Media";

function Saved() {
  return (
    <div className="p-2">

      <h5>Saved Books</h5>

      <ul className="list-unstyled">
        <Media as="li">
          <img
            width={64}
            height={64}
            className="mr-3"
            src="holder.js/64x64"
            alt="Generic placeholder"
          />
          <Media.Body>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
              fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </Media.Body>
        </Media>
      </ul>

    </div>
  )
}

export default Saved;