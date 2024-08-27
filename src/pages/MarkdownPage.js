import BasicLayout from "layouts/BasicLayout";
import MarkdownRenderer from "component/MarkdownRenderer";
import { useParams } from "react-router-dom";

const MarkdowmPage = () => {

    const { '*': path } = useParams();

    return (
        <BasicLayout>
            <MarkdownRenderer path={path} />
        </BasicLayout >
    )
}
export default MarkdowmPage;