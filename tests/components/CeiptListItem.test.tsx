import { render } from "@testing-library/react";
import CeiptListItem from "../../components/CeiptListItem"
describe('CeiptListItem component', () => {
    it('should render default', () => {
        const { container } = render(<CeiptListItem />);
        expect(container.childElementCount).toEqual(1);
    });
});