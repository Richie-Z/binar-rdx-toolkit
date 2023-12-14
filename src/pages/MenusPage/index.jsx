import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getMenu } from "../../redux/features/menu/menuSlice"

const MenusPage = () => {
  const dispatch = useDispatch()
  const { list } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getMenu())
  }, [])

  return (
    <div>
      <h1>menus page</h1>
      {list.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MenusPage;
