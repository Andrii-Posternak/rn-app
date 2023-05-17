import "react-native-gesture-handler";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { getCurrentUser } from "../../redux/auth/authOperation";
import { selectIsAuth } from "../../redux/auth/authSlice";
import { PublicRoute } from "../PublicRoute/PublicRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

export const Main = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <NavigationContainer>
      {isAuth ? <PrivateRoute /> : <PublicRoute />}
    </NavigationContainer>
  );
};
