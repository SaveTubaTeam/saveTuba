import { useDispatch } from "react-redux";
import { setImageMap } from "../../../../redux/slices/imageSlice";

const setMap = () => {
    // const map = useSelector((state) => state.setImageMap.imageMap);
    const dispatch = useDispatch();
    dispatch(setImageMap());

    // return map;
};

export default setMap;