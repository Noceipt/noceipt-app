import { render } from "@testing-library/react";
import CeiptList from "../../components/CeiptList"
describe('CeiptList component', () => {
    it('should render default', () => {
        const { container } = render(<CeiptList />);
        expect(container.childElementCount).toEqual(1);
    });
});