import React, { useContext } from "react";
import GuestContext from "../../context/guestcontext/guestContext";

export const Guestcounter = () => {
  const { guests } = useContext(GuestContext);
  const totalInvited = guests.length;
  const attending = guests.filter((guest) => guest.isconfirmed);
  const totalAttending = attending.length;
  const invitedByDiet = (type) =>
    guests.filter((guest) => guest.dietary === type).length;
  const attendingByDiet = (type) =>
    attending.filter((guest) => guest.dietary === type).length;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Guest</th>
            <th>Invited</th>
            <th>Attending</th>
          </tr>
          <tr>
            <th style={{ color: "red" }}>Non-Veg</th>
            <td style={{ color: "red" }}>{invitedByDiet("Non-Veg")}</td>
            <td style={{ color: "red" }}>{attendingByDiet("Non-Veg")}</td>
          </tr>
          <tr>
            <th style={{ color: "#56ab2f" }}>Vegan</th>
            <td style={{ color: "#56ab2f" }}>{invitedByDiet("Vegan")}</td>
            <td style={{ color: "#56ab2f" }}>{attendingByDiet("Vegan")}</td>
          </tr>
          <tr>
            <th style={{ color: "#3a7bd5" }}>Pescetarians</th>
            <td style={{ color: "#3a7bd5" }}>{invitedByDiet("Pescatarian")}</td>
            <td style={{ color: "#3a7bd5" }}>
              {attendingByDiet("Pescatarian")}
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td style={{ color: "#004e92" }}> {totalInvited}</td>
            <td style={{ color: "#4ca1af" }}>{totalAttending}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Guestcounter;
