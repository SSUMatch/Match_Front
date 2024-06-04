// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import * as H from "../header/Styles.tsx";
// import { LoginProps } from "../../constants/interfaces";
// import { AuthContext } from "./AuthProvider";

// interface userProps {
//   user: LoginProps;
// }
//
// export function LoginComponent({ user }: userProps) {
//   const navigate = useNavigate();
//   const { logoutHandler } = useContext(AuthContext);
//
//   const handleLogout = () => {
//     console.log("로그아웃 클릭실행돼씀");
//     logoutHandler();
//   };
//
//   return (
//     <H.RowContainer>
//       <H.LogoutText onClick={() => navigate("/myPage")}>
//         마이페이지
//       </H.LogoutText>
//     </H.RowContainer>
//   );
// }
