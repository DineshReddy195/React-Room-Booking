import React from "react";
import { withRoomConsumer } from "../Context/Context";
import Loading from "../Loading/Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);