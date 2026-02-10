import { useEffect, useState } from "react";
import { FaChargingStation } from "react-icons/fa";

const Effect = () => {
  const [id, setId] = useState(0);
  const [img, setImg] = useState("https://picsum.photos/id/0/300/300");
  useEffect(() => {
    setImg(`https://picsum.photos/id/${id}/300/300`);
  }, [id]);

  return (
    <div>
      <img src={img} alt={img} />
      <button onClick={() => setId(id + 1)}>
        <FaChargingStation size={50}/>
      </button>
    </div>
  );
};

export default Effect;
