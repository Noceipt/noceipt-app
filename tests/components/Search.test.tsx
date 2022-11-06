import { render } from "@testing-library/react";
import Search from "../../components/Search"
describe('Search component', () => {
    it('should render default', () => {
        const { container } = render(<Search />);
        expect(container.childElementCount).toEqual(1);
    });
});