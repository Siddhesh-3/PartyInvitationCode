import { Button } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import GuestContext from "../../context/guestcontext/guestContext";

const Guestform = () => {
  
  const { addGuest, editAble, updateGuest, clearEdit,errors } = useContext(GuestContext);


  useEffect(() => {
    if (editAble !== null) {
      setGuest(editAble);
    } else {
      setGuest({
        name: "",
        phone: "",
        dietary: "Non-Veg",
        note:"",
      });
    }
  }, [editAble]);


  const [guest, setGuest] = useState({
    name: "",
    phone: "",
    dietary: "Non-Veg",
    note:"",
  });

  const { name, phone, dietary,note } = guest;

  const handleChange = (e) => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value, 
      
    });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    if (editAble !== null) {
      updateGuest(guest);
      clearEdit();
    } else {
      addGuest(guest); 
      setGuest({
        name: "",
        phone: "",
        dietary: "Non-Veg",
        note:"",
      });
    }
  };
  return (
    <div className="invite-section">
      <h1>
        <img src="inv.png" style={{ height: 60 }} />
        {editAble !== null ? "  Edit Guest" : " Invite Someone "}
      </h1>
      <form onSubmit={onsubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange} 
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
         <input
          type="text"
          placeholder="Note"
          name="note"
          value={note}
          onChange={handleChange}
        />
        <p className="options-label">Dietary</p>
        <div className="options">
          <label className="container">
            Non-Veg
            <input
              type="radio"
              name="dietary"
              value="Non-Veg"
              checked={dietary === "Non-Veg"}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Vegan
            <input
              type="radio"
              name="dietary"
              value="Vegan"
              checked={dietary === "Vegan"}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Pescatarian
            <input
              type="radio"
              name="dietary"
              value="Pescatarian"
              checked={dietary === "Pescatarian"}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          // className="btn"
        >
          {editAble !== null ? "  Update Guest" : " Add Guest"}
        </Button>
        <br />
        {editAble !== null ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={clearEdit}
            // value="Cancel"
            type="button"

            // className="btn clear"
          >
            Cancel
          </Button>
        ) : null}
      </form>
    </div>
  );
};

export default Guestform;
