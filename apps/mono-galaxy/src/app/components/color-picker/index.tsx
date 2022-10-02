import { HexColorPicker } from "react-colorful";
import { useCustomSnapshot } from "../../hooks/useCustomSnapshot";
import { useCustomState } from "../../hooks/useCustomState";

type TItems = { [key: string]: string };

export function ColorPicker() {
  const { state } = useCustomState();
  const { snap } = useCustomSnapshot(state)
  const snapCurrent = snap.current;
  const stateItems: TItems = state.items;

  // console.log({ snapCurrent, stateItems })

  if (!snapCurrent) return null;
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker className="picker" color={snap.items[snapCurrent]} onChange={(color) => {
        if (snapCurrent !== null && state?.items && state?.current) {
          stateItems[snapCurrent] = color;
        }
      }} />
      <h1>{snap.current}</h1>
    </div>
  );
}

export default ColorPicker
