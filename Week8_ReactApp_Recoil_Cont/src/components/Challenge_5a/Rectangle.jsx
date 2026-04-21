import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  rectangleState,
  rectangleAreaSelector,
} from "../../global_states/rectangleState";

function Rectangle() {
  let setRectangle = useSetRecoilState(rectangleState);
  let rectangleArea = useRecoilValue(rectangleAreaSelector);

  function updateWidth(event) {
    let value = parseInt(event.target.value);
    setRectangle((rectangle) => {
      return {
        ...rectangle,
        width: Number.isNaN(value) ? 1 : value,
      };
    });
  }

  function updateHeight(event) {
    let value = parseInt(event.target.value);
    setRectangle((rectangle) => {
      return {
        ...rectangle,
        height: Number.isNaN(value) > 0 ? 1 : value,
      };
    });
  }

  return (
    <div>
      <form>
        <label>
          Chiều rộng:
          <input
            type="number"
            name="width"
            defaultValue={1}
            min={1}
            onChange={updateWidth}
          />
        </label>
        <label style={{ display: "block" }}>
          Chiều cao:
          <input
            type="number"
            name="height"
            defaultValue={1}
            min={1}
            onChange={updateHeight}
          />
        </label>
      </form>
      <p>Diện tích: {rectangleArea}</p>
    </div>
  );
}

export default Rectangle;
