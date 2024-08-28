import BasicLayout from "layouts/BasicLayout";
import { Link } from "react-router-dom";


const MainPage = () => {
  return (
    <BasicLayout>
      <h1>simple react github page</h1>

      This is a project that only has the minimum structure that can be uploaded to the GitHub page.<br />
      It supports markdown.<br />
      The design is minimal.<br />
      After cloning, you can customize it as you want.<br />
      <br />

      깃허브 페이지에 업로드 할 수 있는 최소한의 구조만 잡은 프로젝트 입니다.<br />
      마크다운을 지원합니다.<br />
      디자인은 최소로 하였습니다.<br />
      클론한 후에 원하시는 대로 커스텀하면 됩니다.<br />
      <br />
      <Link to={'/md/01.md'}>How to copy</Link><br />
      <Link to={'/md/02.md'}>How to create an md file</Link>
    </BasicLayout >
  )
}
export default MainPage;