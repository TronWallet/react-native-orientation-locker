import { Platform } from "react-native";
import OrientationIos from "./index.ios.js";
import OrientationAndroid from "./index.android.js";

const Orientation = Platform.OS === "ios"
  ? OrientationIos
  : OrientationAndroid;

export default Orientation;
