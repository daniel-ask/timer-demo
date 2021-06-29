import React from "react";

export default function TimerForm({ updateTime, sec, min }) {
  return (
    <form>
      <input
        type="number"
        name="min"
        id="minutes"
        value={min}
        onChange={updateTime}
        min={0}
      />
      :
      <input
        type="number"
        name="sec"
        id="seconds"
        value={sec}
        onChange={updateTime}
        min={0}
        max={60}
      />
    </form>
  );
}
